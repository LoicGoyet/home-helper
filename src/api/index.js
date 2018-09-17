import database from '../utils/database';
import nodeEnv from '../utils/nodeEnv';
import { setState } from '../ducks/root';
import mock from './mock.json';

const useMocks = nodeEnv.isDev || nodeEnv.isTest;
const data = database.ref('/');

export const sendDataToFirebase = state => {
  if (useMocks) return;
  return data.set(state);
};

export const loadDataFromFirebase = store => {
  if (useMocks) {
    return store.dispatch(setState(mock));
  }

  data.on('value', snapshot => {
    store.dispatch(setState(snapshot.val()));
  });
};
