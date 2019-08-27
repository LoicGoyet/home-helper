import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import collection, { collectionSaga } from 'ducks/recipes/collection';
import pantry, { pantrySaga } from 'ducks/recipes/pantry';
import tags from 'ducks/recipes/tags';

export default combineReducers({ collection, pantry, tags });

export function* recipesSaga() {
  yield all([collectionSaga(), pantrySaga()]);
}
