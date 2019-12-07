import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { FaShoppingCart, FaBook, FaInbox } from 'react-icons/lib/fa';

import Todos from 'views/Todos';
import RecipesAdd from 'views/RecipesAdd';
import RecipesEdit from 'views/RecipesEdit';
import RecipesPantry from 'views/RecipesPantry';
import RecipesCollection from 'views/RecipesCollection';
import SuggestionsLists from 'containers/todos/SuggestionsLists';
import PantryCount from 'containers/recipes/PantryCount';
import Menu from 'components/Menu';
import PATHS from 'router/paths';

const Router = () => (
  <HashRouter>
    <React.Fragment>
      <Switch>
        <Route exact path={PATHS.TODOS} component={Todos} />
        <Route exact path={PATHS.RECIPES_LIST} component={RecipesCollection} />
        <Route exact path={PATHS.RECIPES_ADD} component={RecipesAdd} />
        <Route exact path={PATHS.RECIPES_EDIT} component={RecipesEdit} />
        <Route exact path={PATHS.RECIPES_PANTRY} component={RecipesPantry} />
        <Redirect from="*" to={PATHS.TODOS} />
      </Switch>

      <SuggestionsLists />

      <Menu
        items={[
          {
            icon: FaBook,
            path: PATHS.RECIPES_LIST,
            label: 'Livre de recettes',
          },
          {
            icon: FaShoppingCart,
            path: PATHS.TODOS,
            label: 'Liste de courses',
          },
          {
            icon: FaInbox,
            path: PATHS.RECIPES_PANTRY,
            label: 'Au menu',
            counter: PantryCount,
          },
        ]}
      />
    </React.Fragment>
  </HashRouter>
);

export default Router;
