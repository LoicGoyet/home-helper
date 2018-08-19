import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { todosSaga } from './todos/tasks';
import todos from './todos';
import recipes, { recipesSaga } from './recipes';

export default combineReducers({ todos, recipes });

export function* rootSaga() {
  yield all([todosSaga(), recipesSaga()]);
}
