import * as R from 'ramda';
// Actions
import { takeEvery, put, select } from 'redux-saga/effects';

import { generateId } from 'utils/redux';
import { filterPantryByAvailable, filterPantryByUnavailable, sortPantryByDateDesc, unfoldPantry } from 'utils/pantry';

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
      const { title, ingredients, link, collectionItem } = action;
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

// Selectors

export const selectors = {
  getAvailablePantry: state => {
    const { pantry } = state.recipes;
    const { products, units } = state.todos;

    return R.compose(
      unfoldPantry(products, units),
      sortPantryByDateDesc,
      filterPantryByAvailable
    )(pantry);
  },
  getAvailablePantryLength: R.compose(
    R.length,
    R.pathOr([], ['allIds']),
    filterPantryByAvailable,
    R.path(['recipes', 'pantry'])
  ),
  getUnavailablePantry: state => {
    const { pantry } = state.recipes;
    const { products, units } = state.todos;

    return R.compose(
      unfoldPantry(products, units),
      sortPantryByDateDesc,
      filterPantryByUnavailable
    )(pantry);
  },
};

// Sagas

function* getCollectionItemForPantry(payload) {
  const { ingredients, link, title, id } = yield select(state => state.recipes.collection.byId[payload.id]);
  return yield put({
    type: ADD_JOINED_PANTRY_ENTRY,
    ingredients,
    link,
    title,
    collectionItem: id,
  });
}

export function* pantrySaga() {
  yield takeEvery(ADD_PANTRY_ENTRY, getCollectionItemForPantry);
}
