import React from 'react';
import { Provider } from 'react-redux';

import store from '../src/store';
import SuggestionsLists from 'container/SuggestionsLists';

export const withReduxProvider = storyFn => (
  <Provider store={store}>
    {storyFn()}
  </Provider>
)

export const withSuggestionLists = storyFn => (
  <React.Fragment>
    {storyFn()}
    <SuggestionsLists />
  </React.Fragment>
)
