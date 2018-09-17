import database from '../utils/database';
import { setState } from '../ducks/root';
import mock from './mock.json';
import { USE_MOCK } from '../config';

const data = database.ref('/');

export const sendDataToFirebase = state => {
  if (USE_MOCK) return;
  const jsonState = JSON.parse(JSON.stringify(state));
  return data.set(jsonState);
};

export const loadDataFromFirebase = store => {
  if (USE_MOCK) {
    return store.dispatch(setState(mock));
  }

  data.on('value', snapshot => {
    store.dispatch(setState(snapshot.val()));
  });
};
