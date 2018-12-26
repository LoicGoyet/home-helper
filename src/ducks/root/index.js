import { combineReducers } from 'redux';
import { takeLatest, select } from 'redux-saga/effects';

import todos from '../todos';
import recipes from '../recipes';
import { sendDataToFirebase } from '../../api';

export const SET_STATE = 'home-helper/root/SET_STATE';

const appReducer = combineReducers({ todos, recipes });

const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_STATE: {
      return action.data;
    }

    default: {
      return appReducer(state, action);
    }
  }
};

export const setState = data => ({
  type: SET_STATE,
  data,
});

function* logActions() {
  const state = yield select();
  return sendDataToFirebase(state);
}

export function* rootStateSaga() {
  yield takeLatest(action => action.type !== SET_STATE, logActions);
}

export default rootReducer;
