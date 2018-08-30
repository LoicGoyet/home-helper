// Actions
import { takeEvery, put } from 'redux-saga/effects';

import { getProductId } from '../../todos/products';
import { getUnitId } from '../../todos/units';
import { getTagId } from '../../recipes/tags';
import { generateId } from '../../../utils/redux';

export const ADD_COLLECTION_ITEM = 'home-helper/recipes/collection/ADD_COLLECTION_ITEM';
export const ADD_JOINED_COLLECTION_ITEM = 'home-helper/recipes/collection/ADD_JOINED_COLLECTION_ITEM';

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

// Sagas

function* joinIngredients(ingredients) {
  return yield ingredients.map(function*(ingredient) {
    const { productTitle, categoryTitle, unitTitle, quantity } = ingredient;
    const unit = yield* getUnitId(unitTitle);
    const product = yield* getProductId(productTitle, categoryTitle, unit);

    return {
      product,
      quantity,
      unit,
    };
  });
}

function* joinTags(tags) {
  return yield tags.map(function*(tag) {
    return yield getTagId(tag);
  });
}

function* createJoinedCollectionItem(payload) {
  const { title, link } = payload;

  const ingredients = yield* joinIngredients(payload.ingredients);
  const tags = yield* joinTags(payload.tags);

  yield put({
    type: ADD_JOINED_COLLECTION_ITEM,
    title,
    tags,
    ingredients,
    link,
  });
}

export function* collectionSaga() {
  yield takeEvery(ADD_COLLECTION_ITEM, createJoinedCollectionItem);
}
