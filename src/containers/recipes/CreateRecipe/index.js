import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RecipeForm from 'containers/recipes/RecipeForm';
import * as recipes from 'ducks/recipes/collection';
import PATHS from 'router/paths';

const Container = ({ redirectTo }) => {
  const dispatch = useDispatch();
  const [hasToRedirect, setHasToRedirect] = useState(false);
  const redirect = !!hasToRedirect && !!redirectTo;

  const onSubmit = useCallback(
    recipe => {
      dispatch(recipes.addInCollection(recipe));
      setHasToRedirect(true);
    },
    [dispatch, setHasToRedirect]
  );

  return (
    <React.Fragment>
      {redirect && (
        <Redirect
          to={{
            pathname: redirectTo,
          }}
        />
      )}

      <RecipeForm onSubmit={onSubmit} />
    </React.Fragment>
  );
};

Container.propTypes = {
  redirectTo: PropTypes.oneOf(Object.values(PATHS)),
};

Container.defaultProps = {
  redirectTo: undefined,
};

export default Container;
