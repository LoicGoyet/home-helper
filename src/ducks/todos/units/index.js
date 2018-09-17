import { select, put } from 'redux-saga/effects';

import { generateId } from '../../../utils/redux';

export const ADD_UNIT = 'home-helper/todos/units/ADD_UNIT';
export const SET_UNIT_TITLE = 'home-helper/todos/units/SET_UNIT_TITLE';

// Default state
export const defaultState = {
  byId: {},
  allIds: [],
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_UNIT: {
      const alreadyStored = state.allIds.find(unitId => state.byId[unitId].title === action.title);
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
            createdAt,
            updatedAt: createdAt,
          },
        },
        allIds: [...state.allIds, id],
      };
    }

    case SET_UNIT_TITLE: {
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

export const addUnit = title => ({
  type: ADD_UNIT,
  title,
});

export const setUnitTitle = (id, title) => ({
  type: SET_UNIT_TITLE,
  id,
  title,
});

// Selectors

export const selectUnitByTitle = title => state => {
  const { units } = state.todos;
  return units.allIds.find(id => units.byId[id].title === title);
};

// Getters

export function* getUnitId(title) {
  let unit = yield select(selectUnitByTitle(title));
  if (unit !== undefined) {
    return yield unit;
  }

  yield put({
    type: ADD_UNIT,
    title,
  });

  unit = yield select(selectUnitByTitle(title));
  return yield unit;
}
