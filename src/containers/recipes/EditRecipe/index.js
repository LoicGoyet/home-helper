import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';

import RecipeForm from 'containers/recipes/RecipeForm';
import * as collectionDuck from 'ducks/recipes/collection';
import * as tagsDuck from 'ducks/recipes/tags';
import PATHS from 'router/paths';

const EditRecipe = ({ id, redirectTo }) => {
  const dispatch = useDispatch();
  const [hasToRedirect, setHasToRedirect] = useState(false);
  const redirect = !!hasToRedirect && !!redirectTo;

  const recipes = useSelector(collectionDuck.selectors.getRecipeById(id));
  const ingredients = useSelector(collectionDuck.selectors.getIngredientsWithTitles(id));
  const tags = useSelector(tagsDuck.selectors.getTagsTitleByIds(recipes.tags));

  const onSubmit = useCallback(
    values => {
      dispatch(collectionDuck.updateInCollection(id, values));
      setHasToRedirect(true);
    },
    [id, dispatch]
  );

  return (
    <React.Fragment>
      {!!recipes.title && (
        <Helmet>
          <title>Modifier la recette {recipes.title} - Home helper</title>
        </Helmet>
      )}

      {redirect && (
        <Redirect
          to={{
            pathname: redirectTo,
          }}
        />
      )}

      <RecipeForm
        onSubmit={onSubmit}
        id={id}
        defaultValues={{
          title: recipes.title || '',
          tags,
          link: recipes.link || '',
          ingredients,
        }}
      />
    </React.Fragment>
  );
};

EditRecipe.propTypes = {
  redirectTo: PropTypes.oneOf(Object.values(PATHS)),
  id: PropTypes.any.isRequired,
};

EditRecipe.defaultProps = {
  redirectTo: undefined,
};

export default EditRecipe;
