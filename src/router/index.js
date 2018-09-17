import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { FaShoppingCart, FaBook, FaInbox } from 'react-icons/lib/fa';

import Todos from '../views/Todos';
import RecipesAdd from '../views/RecipesAdd';
import RecipesEdit from '../views/RecipesEdit';
import RecipesPantry from '../views/RecipesPantry';
import RecipesCollection from '../views/RecipesCollection';
import SuggestionsLists from '../container/SuggestionsLists';
import Layout from '../components/Layout';
import nodeEnv from '../utils/nodeEnv';
import PATHS from './paths';

const Router = () => {
  const menu = [
    {
      icon: FaBook,
      path: PATHS.RECIPES_LIST,
      label: 'livre de recettes',
    },
    {
      icon: FaShoppingCart,
      path: PATHS.TODOS,
      label: 'liste de courses',
    },
    {
      icon: FaInbox,
      path: PATHS.RECIPES_PANTRY,
      label: 'au menu',
    },
  ];

  return (
    <HashRouter>
      <Layout menu={menu}>
        <Route exact path={PATHS.HOME} component={Todos} />
        <Route exact path={PATHS.TODOS} component={Todos} />
        <Route exact path={PATHS.RECIPES_LIST} component={RecipesCollection} />
        <Route exact path={PATHS.RECIPES_ADD} component={RecipesAdd} />
        <Route exact path={PATHS.RECIPES_EDIT} component={RecipesEdit} />
        <Route exact path={PATHS.RECIPES_PANTRY} component={RecipesPantry} />
        <SuggestionsLists />
      </Layout>
    </HashRouter>
  );
};

export default Router;
