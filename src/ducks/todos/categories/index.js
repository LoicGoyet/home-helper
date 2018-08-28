import { takeLatest, select, put } from 'redux-saga/effects';

import Config from '../../../config';
import database from '../../../utils/database';
import { strToColor } from '../../../utils/colors';
import { generateId } from '../../../utils/redux';

export const FETCH = 'home-helper/todos/categories/FETCH';
export const FETCH_SUCCESS = 'home-helper/todos/categories/FETCH_SUCCESS';
export const ADD_CATEGORY = 'home-helper/todos/categories/ADD_CATEGORY';
export const UPDATE_CATEGORY = 'home-helper/todos/categories/UPDATE_CATEGORY';

// Default state
export const defaultState = {
  byId: {},
  allIds: [],
};

// Reducer
// Actions
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return action.data;
    }

    case ADD_CATEGORY: {
      const alreadyStored = state.allIds.find(categoryId => state.byId[categoryId].title === action.title);
      if (alreadyStored !== undefined) return { ...state };

      const id = generateId(state.allIds);
      const { title } = action;
      const createdAt = Date.now();

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            title,
            color: strToColor(title),
            createdAt,
            updatedAt: createdAt,
          },
        },
        allIds: [...state.allIds, id],
      };
    }

    case UPDATE_CATEGORY: {
      const { id, title } = action;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            title,
            updatedAt: Date.now(),
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

// Action Creators

export const addCategory = title => ({
  type: ADD_CATEGORY,
  title,
});

export const updateCategory = (id, title) => ({
  type: UPDATE_CATEGORY,
  id,
  title,
});

export const fetch = () => ({
  type: FETCH,
});

// Sagas

function* fetchCategory() {
  if (Config.USE_MOCK) return yield;

  const data = yield database
    .ref('/todos/categories')
    .once('value')
    .then(snapshot => snapshot.val());

  yield put({ type: FETCH_SUCCESS, data });
}

function* saveCategories() {
  if (Config.USE_MOCK) return yield;
  const { categories } = yield select(state => state.todos);
  yield database.ref('/todos/categories').set(categories);
}

export function* categoriesSaga() {
  yield takeLatest(FETCH, fetchCategory);
  yield takeLatest(ADD_CATEGORY, saveCategories);
  yield takeLatest(UPDATE_CATEGORY, saveCategories);
}

export const selectCategoryByTitle = title => state => {
  const { categories } = state.todos;
  return categories.allIds.find(id => categories.byId[id].title === title);
};
