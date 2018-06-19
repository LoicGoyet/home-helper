import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Todos from './views/Todos';
import RecipesCollection from './views/RecipesCollection';
import nodeEnv from './utils/nodeEnv';

const Router = () => {
  const basename = nodeEnv.isProd ? process.env.PRODUCTION_BASENAME : '/';

  return (
    <BrowserRouter basename={basename}>
      <div>
        <Route exact path="/" component={Todos} />
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/recipes/collection" component={RecipesCollection} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
