import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as R from 'ramda';
import {
  sortTasksByDateDesc,
  filterTasksByUndone,
  reshapeTasksByCategories,
  filterTasksByDone,
  unfoldTasks,
} from 'utils/tasks';

import { generateId } from 'utils/redux';
import { getProductId } from 'ducks/todos/products';
import { getUnitId } from 'ducks/todos/units';
import { ADD_JOINED_PANTRY_ENTRY } from 'ducks/recipes/pantry';

// Actions
export const ADD_TASK = 'home-helper/todos/tasks/ADD_TASK';
export const ADD_TASK_JOINED = 'home-helper/todos/tasks/ADD_TASK_JOINED';
export const TOGGLE_TASK = 'home-helper/todos/tasks/TOGGLE_TASK';

// Default state
export const defaultState = {
  byId: {},
  allIds: [],
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_TASK_JOINED: {
      // Check if in state there is task with similar title and which is open
      const getAlreadyInStateTask = taskId => {
        const task = state.byId[taskId];
        const hasSameProduct = task.product === action.product;
        const hasSameUnit = task.unit === action.unit;
        const isNotDone = task.done === false;

        if (hasSameProduct && hasSameUnit && isNotDone) return task;
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

      const id = `task-${generateId(state.allIds)}`;
      const { product, quantity, unit } = action;
      const createdAt = Date.now();

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            product,
            quantity,
            unit,
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

    default:
      return state;
  }
};

export default reducer;

// Action Creators

export const addTask = (productTitle, categoryTitle, quantity, unitTitle) => ({
  type: ADD_TASK,
  productTitle,
  categoryTitle,
  quantity,
  unitTitle,
});

export const addTaskJoined = (product, quantity, unit) => ({
  type: ADD_TASK_JOINED,
  product,
  quantity,
  unit,
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  id,
});

// Sagas

function* createJoinedTask(payload) {
  const { productTitle, categoryTitle, unitTitle } = payload;
  const unit = yield call(getUnitId, unitTitle);
  const product = yield call(getProductId, productTitle, categoryTitle, unit);

  const { quantity } = payload;

  yield put({
    type: ADD_TASK_JOINED,
    product,
    quantity,
    unit,
  });
}

function* createdJoinedTaskFromPantry({ ingredients }) {
  return yield all(
    ingredients.map(function*({ product, quantity, unit }) {
      return yield put({
        type: ADD_TASK_JOINED,
        product,
        quantity,
        unit,
      });
    })
  );
}

export function* tasksSaga() {
  yield takeEvery(ADD_TASK, createJoinedTask);
  yield takeEvery(ADD_JOINED_PANTRY_ENTRY, createdJoinedTaskFromPantry);
}

// Selectors

export const selectors = {
  getUndoneTasksByCategories: state => {
    const { products, units, categories, tasks } = state.todos;

    return R.compose(
      reshapeTasksByCategories(products, units, categories),
      sortTasksByDateDesc,
      filterTasksByUndone
    )(tasks);
  },

  getDoneTasks: state => {
    const { products, units, categories, tasks } = state.todos;

    return R.compose(
      unfoldTasks(products, units, categories),
      sortTasksByDateDesc,
      filterTasksByDone
    )(tasks);
  },
};
