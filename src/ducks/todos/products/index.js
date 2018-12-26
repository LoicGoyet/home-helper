import { takeEvery, select, put, take, call } from 'redux-saga/effects';

import { generateId } from '../../../utils/redux';
import { normalizeStr } from '../../../utils/strings';
import { getCategoryId } from '../categories';

export const ADD_PRODUCT = 'home-helper/todos/products/ADD_PRODUCT';
export const ADD_PRODUCT_JOINED = 'home-helper/todos/products/ADD_PRODUCT_JOINED';
export const SET_PRODUCT_CATEGORY = 'home-helper/todos/products/SET_PRODUCT_CATEGORY';
export const SET_PRODUCT_TITLE = 'home-helper/todos/products/SET_PRODUCT_TITLE';
export const GHOST_ACTION = 'home-helper/todos/products/GHOST_ACTION';

// Default state
export const defaultState = {
  byId: {},
  allIds: [],
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT_JOINED: {
      const id = generateId(state.allIds);
      const { title, category, defaultUnit } = action;
      const createdAt = Date.now();

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            title,
            category,
            defaultUnit,
            createdAt,
            updatedAt: createdAt,
          },
        },
        allIds: [...state.allIds, id],
      };
    }

    case SET_PRODUCT_TITLE: {
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

    case SET_PRODUCT_CATEGORY: {
      const { id, category } = action;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            category,
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

export const addProduct = (title, categoryTitle = null) => ({
  type: ADD_PRODUCT,
  title,
  categoryTitle,
});

export const setProductTitle = (id, title) => ({
  type: SET_PRODUCT_TITLE,
  id,
  title,
});

export const setProductCategory = (id, categoryTitle) => ({
  type: SET_PRODUCT_CATEGORY,
  id,
  categoryTitle,
});

// Sagas

function* createJoinedProduct(payload) {
  const category = yield call(getCategoryId, payload.categoryTitle);
  const { title, unit } = payload;

  yield put({
    type: ADD_PRODUCT_JOINED,
    title,
    defaultUnit: unit,
    category,
  });
}

export function* productsSaga() {
  yield takeEvery(ADD_PRODUCT, createJoinedProduct);
}

// Selectors

export const selectProductByTitle = title => state => {
  const { products } = state.todos;
  return products.allIds.find(id => normalizeStr(products.byId[id].title) === normalizeStr(title));
};

// Getters

export function* getProductId(productTitle, categoryTitle, unit) {
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

  // fix take() above for unknow reasons
  yield put({
    type: GHOST_ACTION,
  });
  yield put({
    type: GHOST_ACTION,
  });

  product = yield select(selectProductByTitle(productTitle));
  return yield product;
}
