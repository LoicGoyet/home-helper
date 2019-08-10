import React from 'react';
import { Provider } from 'react-redux';

import store from '../src/store';

export const withReduxProvider = storyFn => (
  <Provider store={store}>
    {storyFn()}
  </Provider>
)
