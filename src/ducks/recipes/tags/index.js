import { select, put } from 'redux-saga/effects';

import { generateId } from '../../../utils/redux';
import { normalizeStr } from '../../../utils/strings';

export const ADD_TAG = 'home-helper/recipes/tags/ADD_UNIT';

// Default state
export const defaultState = {
  byId: {},
  allIds: [],
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_TAG: {
      const { title } = action;
      const id = generateId(state.allIds);
      const createdAt = Date.now();

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            title,
            createdAt,
            updatedAt: createdAt,
          },
        },
        allIds: [...state.allIds, id],
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

// Action Creators

export const addTag = title => ({
  type: ADD_TAG,
  title,
});

// Selectors

export const selectTagByTitle = title => state => {
  const { tags } = state.recipes;
  return tags.allIds.find(id => normalizeStr(tags.byId[id].title) === normalizeStr(title));
};

// Getters

export function* getTagId(title) {
  let tag = yield select(selectTagByTitle(title));
  if (tag !== undefined) {
    return yield tag;
  }

  yield put({
    type: ADD_TAG,
    title,
  });

  tag = yield select(selectTagByTitle(title));
  return yield tag;
}
