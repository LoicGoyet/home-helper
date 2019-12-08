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
import { PlanProvider } from 'components/Plan';
import Menu from 'components/Menu';
import PATHS from 'router/paths';

const Router = () => (
  <HashRouter>
    <PlanProvider
      properties={{
        color: ['rgb(250, 250, 250)'],
        backgroundColor: ['rgb(20, 20, 20)', 'rgb(30, 30, 30)', 'rgb(40, 40, 40)'],
        // boxShadow: [
        //   '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        //   '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        //   '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        // ],
        boxShadow: ['0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', 'none'],
      }}
    >
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
    </PlanProvider>
  </HashRouter>
);

export default Router;
