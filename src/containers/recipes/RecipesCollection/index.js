import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RecipesCollectionComponent from 'containers/recipes/RecipesCollection/component';
import * as pantryDuck from 'ducks/recipes/pantry';
import * as collectionDuck from 'ducks/recipes/collection';

const RecipesCollectionNew = props => {
  const dispatch = useDispatch();
  const collection = useSelector(collectionDuck.selectors.getRecipes);

  const onAddItem = useCallback(
    (...args) => {
      dispatch(pantryDuck.addPantryEntry(...args));
    },
    [dispatch]
  );

  return <RecipesCollectionComponent {...props} onAddItem={onAddItem} collection={collection} />;
};

export default RecipesCollectionNew;
