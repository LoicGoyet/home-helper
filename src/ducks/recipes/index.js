import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import collection, { collectionSaga } from './collection';
import pantry, { pantrySaga } from './pantry';
import tags from './tags';

export default combineReducers({ collection, pantry, tags });

export function* recipesSaga() {
  yield all([collectionSaga(), pantrySaga()]);
}
