import * as R from 'ramda';
// Actions
import { takeEvery, put, all, call } from 'redux-saga/effects';

import { getProductId } from 'ducks/todos/products';
import { getUnitId } from 'ducks/todos/units';
import { generateId } from 'utils/redux';
import { ADD_JOINED_PANTRY_ENTRY } from 'ducks/recipes/pantry';
import { sortPantryByDateDesc, unfoldPantry } from 'utils/pantry';

export const ADD_COLLECTION_ITEM = 'home-helper/recipes/collection/ADD_COLLECTION_ITEM';
export const UPDATE_COLLECTION_ITEM = 'home-helper/recipes/collection/UPDATE_COLLECTION_ITEM';
export const ADD_JOINED_COLLECTION_ITEM = 'home-helper/recipes/collection/ADD_JOINED_COLLECTION_ITEM';
export const UPDATE_JOINED_COLLECTION_ITEM = 'home-helper/recipes/collection/UPDATE_JOINED_COLLECTION_ITEM';
export const UPDATE_COLLECTION_ITEM_LAST_ADD_IN_PANTRY =
  'home-helper/recipes/collection/UPDATE_COLLECTION_ITEM_LAST_ADD_IN_PANTRY';

// Default state
export const defaultState = {
  byId: {},
  allIds: [],
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_JOINED_COLLECTION_ITEM: {
      const { title, ingredients, link } = action;
      const id = `recipe-${generateId(state.allIds)}`;
      const createdAt = Date.now();

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            title,
            ingredients,
            link,
            createdAt,
            updatedAt: createdAt,
            lastAddInPantry: 0,
          },
        },
        allIds: [...state.allIds, id],
      };
    }

    case UPDATE_JOINED_COLLECTION_ITEM: {
      const { id, title, ingredients, link } = action;
      const updatedAt = Date.now();

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            id,
            title,
            ingredients,
            link,
            updatedAt,
          },
        },
      };
    }

    case UPDATE_COLLECTION_ITEM_LAST_ADD_IN_PANTRY: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            lastAddInPantry: Date.now(),
          },
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;

// Action Creators

export const addInCollection = recipe => ({
  type: ADD_COLLECTION_ITEM,
  recipe,
});

export const updateInCollection = (id, recipe) => ({
  type: UPDATE_COLLECTION_ITEM,
  id,
  recipe,
});

// selectors

export const selectors = {
  getRecipeById: id => state => R.path(['recipes', 'collection', 'byId', id], state),
  getIngredientsWithTitles: id => state => {
    const recipe = R.path(['recipes', 'collection', 'byId', id], state);
    const ingredients = R.prop('ingredients', recipe) || [];

    return ingredients.map(ingredient => {
      const category = R.path(['byId', ingredient.product, 'category'], state.todos.products);

      return {
        quantity: ingredient.quantity,
        productTitle: R.path(['byId', ingredient.product, 'title'], state.todos.products),
        unitTitle: R.path(['byId', ingredient.unit, 'title'], state.todos.units),
        categoryTitle: R.path(['byId', category, 'title'], state.todos.categories),
      };
    });
  },
  getRecipes: state => {
    const { collection } = state.recipes;
    const { products, units } = state.todos;

    return R.compose(
      unfoldPantry(products, units),
      sortPantryByDateDesc
    )(collection);
  },
};

// Sagas

function* joinIngredients(ingredients) {
  return yield all(
    ingredients.map(function*(ingredient) {
      const { productTitle, categoryTitle, unitTitle, quantity } = ingredient;
      const unit = yield call(getUnitId, unitTitle);
      const product = yield call(getProductId, productTitle, categoryTitle, unit);

      return {
        product,
        quantity,
        unit,
      };
    })
  );
}

function* createJoinedCollectionItem({ recipe }) {
  const { title, link } = recipe;

  const ingredients = yield call(joinIngredients, recipe.ingredients);

  yield put({
    type: ADD_JOINED_COLLECTION_ITEM,
    title,
    ingredients,
    link,
  });
}

function* updateJoinedCollectionItem({ id, recipe }) {
  const { title, link } = recipe;

  const ingredients = yield call(joinIngredients, recipe.ingredients);

  yield put({
    type: UPDATE_JOINED_COLLECTION_ITEM,
    id,
    title,
    ingredients,
    link,
  });
}

function* updateItemLastAddInPantry({ collectionItem }) {
  return yield put({
    type: UPDATE_COLLECTION_ITEM_LAST_ADD_IN_PANTRY,
    id: collectionItem,
  });
}

export function* collectionSaga() {
  yield takeEvery(ADD_COLLECTION_ITEM, createJoinedCollectionItem);
  yield takeEvery(UPDATE_COLLECTION_ITEM, updateJoinedCollectionItem);
  yield takeEvery(ADD_JOINED_PANTRY_ENTRY, updateItemLastAddInPantry);
}
