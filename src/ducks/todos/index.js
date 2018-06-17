import { takeLatest } from 'redux-saga/effects';

import Config from '../../config';

// Actions
export const FETCH_TASKS = 'home-helper/todos/FETCH_TASKS';
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
    case ADD_TASK: {
      const { title, category, quantity, quantityUnit } = action;

      const getTask = stateTask => stateTask.title === title && stateTask.quantityUnit === quantityUnit;
      const isOldTask = state.tasks.some(getTask);

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

      const isUnitIsAlreadyInState = Object.keys(state.units).indexOf(title) > -1;
      const units = isUnitIsAlreadyInState
        ? state.units
        : {
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

// Sagas

function* fetchTasks() {
  if (Config.USE_MOCK) return yield;

  yield console.log('fetchTasks !');
}

function* saveTasks() {
  if (Config.USE_MOCK) return yield;

  yield console.log('saveTasks !');
}

export function* todosSaga() {
  yield takeLatest(FETCH_TASKS, fetchTasks);
  yield takeLatest(ADD_TASK, saveTasks);
}
