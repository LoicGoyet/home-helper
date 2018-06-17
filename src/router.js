import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Todos from './views/Todos';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Todos} />
      <Route exact path="/todos" component={Todos} />
    </div>
  </BrowserRouter>
);

export default Router;
