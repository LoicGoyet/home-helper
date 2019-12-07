import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import collection, { collectionSaga } from 'ducks/recipes/collection';
import pantry, { pantrySaga } from 'ducks/recipes/pantry';

export default combineReducers({ collection, pantry });

export function* recipesSaga() {
  yield all([collectionSaga(), pantrySaga()]);
}
