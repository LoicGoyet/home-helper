// Actions
import { takeEvery, put, all, call } from 'redux-saga/effects';

import { getProductId } from 'ducks/todos/products';
import { getUnitId } from 'ducks/todos/units';
import { getTagId } from 'ducks/recipes/tags';
import { generateId } from 'utils/redux';
import { ADD_JOINED_PANTRY_ENTRY } from 'ducks/recipes/pantry';

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
      const { title, tags, ingredients, link } = action;
      const id = generateId(state.allIds);
      const createdAt = Date.now();

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            title,
            tags,
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
      const { id, title, tags, ingredients, link } = action;
      const updatedAt = Date.now();

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            id,
            title,
            tags,
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

export const addInCollection = (title, tags, ingredients, link) => ({
  type: ADD_COLLECTION_ITEM,
  title,
  tags,
  ingredients,
  link,
});

export const updateInCollection = (id, title, tags, ingredients, link) => ({
  type: UPDATE_COLLECTION_ITEM,
  id,
  title,
  tags,
  ingredients,
  link,
});

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

function* joinTags(tags) {
  return yield all(
    tags.map(function*(tag) {
      return yield call(getTagId, tag);
    })
  );
}

function* createJoinedCollectionItem(payload) {
  const { title, link } = payload;

  const ingredients = yield call(joinIngredients, payload.ingredients);
  const tags = yield call(joinTags, payload.tags);

  yield put({
    type: ADD_JOINED_COLLECTION_ITEM,
    title,
    tags,
    ingredients,
    link,
  });
}

function* updateJoinedCollectionItem(payload) {
  const { id, title, link } = payload;

  const ingredients = yield call(joinIngredients, payload.ingredients);
  const tags = yield call(joinTags, payload.tags);

  yield put({
    type: UPDATE_JOINED_COLLECTION_ITEM,
    id,
    title,
    tags,
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
