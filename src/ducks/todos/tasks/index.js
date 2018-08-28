import { takeLatest, takeEvery, select, put, take } from 'redux-saga/effects';

import Config from '../../../config';
import database from '../../../utils/database';
import { generateId } from '../../../utils/redux';
import { selectProductByTitle, ADD_PRODUCT, ADD_PRODUCT_JOINED } from '../products';
import { selectUnitByTitle, ADD_UNIT } from '../units';

// Actions
export const FETCH = 'home-helper/todos/tasks/FETCH';
export const FETCH_SUCCESS = 'home-helper/todos/tasks/FETCH_SUCCESS';
export const ADD_TASK = 'home-helper/todos/tasks/ADD_TASK';
export const ADD_TASK_JOINED = 'home-helper/todos/tasks/ADD_TASK_JOINED';
export const TOGGLE_TASK = 'home-helper/todos/tasks/TOGGLE_TASK';

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

      const id = generateId(state.allIds);
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

function* joinProductToTasks(payload, unit) {
  const { productTitle, categoryTitle } = payload;
  let product = yield select(selectProductByTitle(productTitle));

  if (product !== undefined) {
    return yield product;
  }

  yield put({
    type: ADD_PRODUCT,
    title: productTitle,
    categoryTitle,
    unit,
  });

  yield take(ADD_PRODUCT_JOINED);
  product = yield select(selectProductByTitle(productTitle));
  return yield product;
}

function* joinUnitToTasks(payload) {
  const title = payload.unitTitle;
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

function* createJoinedTask(payload) {
  const unit = yield* joinUnitToTasks(payload);
  const product = yield* joinProductToTasks(payload, unit);

  const { quantity } = payload;

  yield put({
    type: ADD_TASK_JOINED,
    product,
    quantity,
    unit,
  });
}

export function* tasksSaga() {
  yield takeLatest(FETCH, fetchTodos);
  yield takeLatest([ADD_TASK_JOINED, TOGGLE_TASK], saveTodos);
  yield takeEvery(ADD_TASK, createJoinedTask);
}
