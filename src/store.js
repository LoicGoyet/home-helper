import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './ducks';

export default createStore(rootReducer, composeWithDevTools());
