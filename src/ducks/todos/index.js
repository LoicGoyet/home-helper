import { takeLatest, select, put } from 'redux-saga/effects';

import Config from '../../config';
import database from '../../utils/database';

// Actions
export const FETCH = 'home-helper/todos/FETCH';
export const FETCH_SUCCESS = 'home-helper/todos/FETCH_SUCCESS';
export const ADD_TASK = 'home-helper/todos/ADD_TASK';
export const TOGGLE_TASK = 'home-helper/todos/TOGGLE_TASK';
export const UPDATE_CATEGORY = 'home-helper/todos/UPDATE_CATEGORY';

// Default state
export const defaultState = {
  baseId: 0,
  tasks: [],
  units: {},
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return action.data;
    }

    case ADD_TASK: {
      const { title, category, quantity, quantityUnit } = action;

      const getTask = stateTask => stateTask.title === title && stateTask.quantityUnit === quantityUnit;
      const isOldTask = state.tasks && state.tasks.some(getTask);

      let tasks = [];
      if (isOldTask) {
        const oldTask = state.tasks.find(getTask);
        const newTask = {
          ...oldTask,
          quantity: oldTask.done ? quantity : oldTask.quantity + quantity,
          done: false,
        };

        tasks = state.tasks.map(stateTask => {
          if (stateTask.title !== newTask.title || stateTask.quantityUnit !== newTask.quantityUnit) return stateTask;
          return newTask;
        });
      } else {
        tasks = [
          ...state.tasks,
          {
            id: state.baseId,
            title,
            category,
            quantity,
            quantityUnit,
            done: false,
          },
        ];
      }

      /*
       * change auto unit when not in state
       */
      // const isUnitIsAlreadyInState = Object.keys(state.units).indexOf(title) > -1;
      // const units = isUnitIsAlreadyInState
      //   ? state.units
      //   : {
      //       ...state.units,
      //       [title]: quantityUnit,
      //     };

      /*
       * change auto unit at any changes
       */
      const units = {
        ...state.units,
        [title]: quantityUnit,
      };

      const baseId = isOldTask ? state.baseId : state.baseId + 1;

      return {
        ...state,
        baseId,
        tasks,
        units,
      };
    }

    case TOGGLE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id !== action.id) return task;

          return {
            ...task,
            done: !task.done,
          };
        }),
      };
    }

    case UPDATE_CATEGORY: {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.category !== action.oldCategory) return task;

          return {
            ...task,
            category: action.newCategory,
          };
        }),
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
