import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Todos from './views/Todos';

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Todos} />
        <Route exact path="/todos" component={Todos} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default Router;
