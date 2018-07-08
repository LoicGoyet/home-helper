import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Todos from '../views/Todos';
import RecipesAdd from '../views/RecipesAdd';
import RecipesCollection from '../views/RecipesCollection';
import SuggestionsLists from '../container/SuggestionsLists';
import nodeEnv from '../utils/nodeEnv';
import PATHS from './paths';

const Router = () => {
  const basename = nodeEnv.isProd ? process.env.PRODUCTION_BASENAME : '/';

  return (
    <BrowserRouter basename={basename}>
      <div>
        <Route exact path={PATHS.HOME} component={Todos} />
        <Route exact path={PATHS.TODOS} component={Todos} />
        <Route exact path={PATHS.RECIPES_LIST} component={RecipesCollection} />
        <Route exact path={PATHS.RECIPES_ADD} component={RecipesAdd} />
        <SuggestionsLists />
      </div>
    </BrowserRouter>
  );
};

export default Router;
