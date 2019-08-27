import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import tasks, { tasksSaga } from 'ducks/todos/tasks';
import categories from 'ducks/todos/categories';
import products, { productsSaga } from 'ducks/todos/products';
import units from 'ducks/todos/units';

export default combineReducers({ tasks, categories, products, units });

export function* todosSaga() {
  yield all([tasksSaga(), productsSaga()]);
}
