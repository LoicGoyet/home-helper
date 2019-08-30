import React from 'react';
import { Provider } from 'react-redux';

import Router from 'router';
import { loadDataFromFirebase } from 'api';
import store from './store';

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
