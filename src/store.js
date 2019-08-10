import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { USE_MOCK } from './config';
import rootReducer, { rootSaga } from './ducks';
import preloadedFixture from './fixtures/preloaded-state.json';

const sagaMiddleware = createSagaMiddleware();
const preloadedState = USE_MOCK ? preloadedFixture : null;

const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
