import React from 'react';
import { Provider } from 'react-redux';

import Router from './router';
import store from './store';
import { loadDataFromFirebase } from './api';

export default class App extends React.Component {
  componentDidMount() {
    // @TODO : redesign this with saga
    loadDataFromFirebase(store);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
