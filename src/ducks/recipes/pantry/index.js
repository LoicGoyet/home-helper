// Actions
import { takeEvery, put, select } from 'redux-saga/effects';

import { generateId } from '../../../utils/redux';

export const ADD_PANTRY_ENTRY = 'home-helper/recipes/pantry/ADD_PANTRY_ENTRY';
export const ADD_JOINED_PANTRY_ENTRY = 'home-helper/recipes/pantry/ADD_JOINED_PANTRY_ENTRY';
export const TOGGLE_PANTRY_ENTRY = 'home-helper/recipes/pantry/TOGGLE_PANTRY_ENTRY';

// Default state
export const defaultState = {
  byId: {},
  allIds: [],
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_JOINED_PANTRY_ENTRY: {
      const { title, tags, ingredients, link, collectionItem } = action;
      const id = generateId(state.allIds);
      const createdAt = Date.now();

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            title,
            available: true,
            tags,
            ingredients,
            link,
            collectionItem,
            createdAt,
            updatedAt: createdAt,
          },
        },
        allIds: [...state.allIds, id],
      };
    }

    case TOGGLE_PANTRY_ENTRY: {
      const { id } = action;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            available: !state.byId[id].available,
            updatedAt: Date.now(),
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

export const addPantryEntry = id => ({
  type: ADD_PANTRY_ENTRY,
  id,
});

export const togglePantryEntry = id => ({
  type: TOGGLE_PANTRY_ENTRY,
  id,
});

// Sagas

function* getCollectionItemForPantry(payload) {
  const { ingredients, link, tags, title, id } = yield select(state => state.recipes.collection.byId[payload.id]);
  return yield put({
    type: ADD_JOINED_PANTRY_ENTRY,
    ingredients,
    link,
    tags,
    title,
    collectionItem: id,
  });
}

export function* pantrySaga() {
  yield takeEvery(ADD_PANTRY_ENTRY, getCollectionItemForPantry);
}
