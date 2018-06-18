import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Todos from './views/Todos';
import nodeEnv from './utils/nodeEnv';

const Router = () => {
  const basename = nodeEnv.isProd ? process.env.PRODUCTION_BASENAME : '/';

  return (
    <BrowserRouter basename={basename}>
      <div>
        <Route exact path="/" component={Todos} />
        <Route exact path="/todos" component={Todos} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
