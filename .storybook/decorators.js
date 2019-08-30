import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from '../src/store';
import SuggestionsLists from 'containers/todos/SuggestionsLists';

export const withReduxProvider = storyFn => (
  <Provider store={store}>
    {withSuggestionLists(storyFn)}
  </Provider>
)

export const withSuggestionLists = storyFn => (
  <React.Fragment>
    {storyFn()}
    <SuggestionsLists />
  </React.Fragment>
)

export const withHashRouter = storyFn => (
  <HashRouter>{storyFn()}</HashRouter>
)
