import { takeLatest, select, put } from 'redux-saga/effects';

import Config from '../../../config';
import database from '../../../utils/database';
import { generateId } from '../../../utils/redux';

// Actions
export const FETCH = 'home-helper/todos/tasks/FETCH';
export const FETCH_SUCCESS = 'home-helper/todos/tasks/FETCH_SUCCESS';
export const ADD_TASK = 'home-helper/todos/tasks/ADD_TASK';
export const TOGGLE_TASK = 'home-helper/todos/tasks/TOGGLE_TASK';
export const UPDATE_CATEGORY = 'home-helper/todos/tasks/UPDATE_CATEGORY';

// Default state
export const defaultState = {
  byId: {},
  allIds: [],
  units: {},
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return action.data;
    }

    case ADD_TASK: {
      // Check if in state there is task with similar title and which is open
      const getAlreadyInStateTask = taskId => {
        const task = state.byId[taskId];
        const hasSameTitle = task.title === action.title;
        const hasSameQuantityUnit = task.quantityUnit === action.quantityUnit;
        const isNotDone = task.done === false;

        if (hasSameTitle && hasSameQuantityUnit && isNotDone) return task;
        return false;
      };

      const isTaskAlreadyOpen = Object.keys(state.byId).some(getAlreadyInStateTask);

      // if we just have to add more quantity to a task
      if (isTaskAlreadyOpen) {
        const taskId = state.allIds.find(getAlreadyInStateTask);
        const task = state.byId[taskId];

        return {
          ...state,
          byId: {
            ...state.byId,
            [task.id]: {
              ...task,
              quantity: task.quantity + action.quantity,
              updatedAt: Date.now(),
            },
          },
        };
      }

      const id = generateId(state.allIds);
      const { title, category, quantity, quantityUnit } = action;
      const createdAt = Date.now();

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            title,
            category,
            quantity,
            quantityUnit,
            done: false,
            createdAt,
            updatedAt: createdAt,
          },
        },
        allIds: [...state.allIds, id],
      };
    }

    case TOGGLE_TASK: {
      const { id } = action;
      const task = state.byId[id];

      if (!task) return { ...state };

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...task,
            done: !task.done,
            updatedAt: Date.now(),
          },
        },
      };
    }

    case UPDATE_CATEGORY: {
      const tasksAffected = Object.keys(state.byId).reduce((acc, id) => {
        const task = state.byId[id];
        if (task.category !== action.oldCategory) return { ...acc };

        return {
          ...acc,
          [id]: {
            ...task,
            category: action.newCategory,
            updateAt: Date.now(),
          },
        };
      }, {});

      return {
        ...state,
        byId: {
          ...state.byId,
          ...tasksAffected,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;

// Action Creators

export const addTask = (title, category, quantity, quantityUnit) => ({
  type: ADD_TASK,
  title,
  category,
  quantity,
  quantityUnit,
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  id,
});

// to destroy
export const updateCategory = (oldCategory, newCategory) => ({
  type: UPDATE_CATEGORY,
  oldCategory,
  newCategory,
});

export const fetch = () => ({
  type: FETCH,
});

// Sagas

function* fetchTodos() {
  if (Config.USE_MOCK) return yield;

  const data = yield database
    .ref('/todos')
    .once('value')
    .then(snapshot => snapshot.val());

  yield put({ type: FETCH_SUCCESS, data });
}

function* saveTodos() {
  if (Config.USE_MOCK) return yield;
  const { todos } = yield select(state => state);
  yield database.ref('/todos').set(todos);
}

export function* todosSaga() {
  yield takeLatest(FETCH, fetchTodos);
  yield takeLatest(ADD_TASK, saveTodos);
  yield takeLatest(TOGGLE_TASK, saveTodos);
  yield takeLatest(UPDATE_CATEGORY, saveTodos);
}
