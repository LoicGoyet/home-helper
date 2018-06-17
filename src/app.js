import React from 'react';
import { Provider } from 'react-redux';

import Router from './router';
import store from './store';
import mock from './mock';

export default class App extends React.Component {
  componentWillMount() {
    mock();
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
