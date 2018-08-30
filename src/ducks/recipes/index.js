import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import collection, { collectionSaga } from './collection';
import tags from './tags';

export default combineReducers({ collection, tags });

export function* recipesSaga() {
  yield all([collectionSaga()]);
}
