import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import todos, { todosSaga } from './todos';

export default combineReducers({ todos });

export function* rootSaga() {
  yield all([todosSaga()]);
}
