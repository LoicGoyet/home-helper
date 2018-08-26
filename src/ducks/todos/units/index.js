import { takeLatest, select, put } from 'redux-saga/effects';

import Config from '../../../config';
import database from '../../../utils/database';
import { generateId } from '../../../utils/redux';

export const FETCH = 'home-helper/todos/units/FETCH';
export const FETCH_SUCCESS = 'home-helper/todos/units/FETCH_SUCCESS';
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
    case FETCH_SUCCESS: {
      return action.data;
    }

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

export const fetch = () => ({
  type: FETCH,
});

// Sagas

function* fetchUnits() {
  if (Config.USE_MOCK) return yield;

  const data = yield database
    .ref('/todos/units')
    .once('value')
    .then(snapshot => snapshot.val());

  yield put({ type: FETCH_SUCCESS, data });
}

function* saveUnits() {
  if (Config.USE_MOCK) return yield;
  const { units } = yield select(state => state.todos);
  yield database.ref('/todos/units').set(units);
}

export function* unitsSaga() {
  yield takeLatest(FETCH, fetchUnits);
  yield takeLatest([ADD_UNIT, SET_UNIT_TITLE], saveUnits);
}

// Selectors

export const selectUnitByTitle = title => state => {
  const { units } = state.todos;
  return units.allIds.find(id => units.byId[id].title === title);
};
