import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import tasks, { tasksSaga } from './tasks';
import categories, { categoriesSaga } from './categories';
import products, { productsSaga } from './products';
import units, { unitsSaga } from './units';

export default combineReducers({ tasks, categories, products, units });

export function* todosSaga() {
  yield all([tasksSaga(), categoriesSaga(), productsSaga(), unitsSaga()]);
}
