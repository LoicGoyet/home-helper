import { select, put } from 'redux-saga/effects';

import { strToColor } from 'utils/colors';
import { generateId } from 'utils/redux';
import { sortCategoriesByAlphabetical } from 'utils/categories';
import { normalizeStr } from 'utils/strings';

export const ADD_CATEGORY = 'home-helper/todos/categories/ADD_CATEGORY';
export const UPDATE_CATEGORY = 'home-helper/todos/categories/UPDATE_CATEGORY';

// Default state
export const defaultState = {
  byId: {},
  allIds: [],
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
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
            pos: id,
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

// Selector

export const selectors = {
  getCategories: state => state.todos.categories,
  getCategoriesByAlphabetical: state => sortCategoriesByAlphabetical(state.todos.products),
  getCategoryByTitle: title => state => {
    const { categories } = state.todos;
    return categories.allIds.find(id => normalizeStr(categories.byId[id].title) === normalizeStr(title));
  },
};

// Getter

export function* getCategoryId(title) {
  let category = yield select(selectors.getCategoryByTitle(title));

  if (category !== undefined) {
    return yield category;
  }

  yield put({
    type: ADD_CATEGORY,
    title,
  });

  category = yield select(selectors.getCategoryByTitle(title));
  return yield category;
}
