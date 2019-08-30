import { all } from 'redux-saga/effects';

import rootReducer, { rootStateSaga } from 'ducks/root';
import { todosSaga } from 'ducks/todos';
import { recipesSaga } from 'ducks/recipes';

export default rootReducer;

export function* rootSaga() {
  yield all([todosSaga(), recipesSaga(), rootStateSaga()]);
}
