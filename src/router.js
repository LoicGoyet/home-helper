import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Todos from './views/Todos';
import RecipesAdd from './views/RecipesAdd';
import SuggestionsLists from './container/SuggestionsLists';
import nodeEnv from './utils/nodeEnv';

const Router = () => {
  const basename = nodeEnv.isProd ? process.env.PRODUCTION_BASENAME : '/';

  return (
    <BrowserRouter basename={basename}>
      <div>
        <Route exact path="/" component={Todos} />
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/recipes/add" component={RecipesAdd} />
        <SuggestionsLists />
      </div>
    </BrowserRouter>
  );
};

export default Router;
