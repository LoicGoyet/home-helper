import { all } from 'redux-saga/effects';

import rootReducer, { rootStateSaga } from './root';
import { todosSaga } from './todos';
import { recipesSaga } from './recipes';

export default rootReducer;

export function* rootSaga() {
  yield all([todosSaga(), recipesSaga(), rootStateSaga()]);
}
