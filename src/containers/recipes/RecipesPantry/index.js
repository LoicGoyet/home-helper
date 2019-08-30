import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import RecipesPantryComponent from 'containers/recipes/RecipesPantry/component';
import { togglePantryEntry, selectors } from 'ducks/recipes/pantry';

const RecipesPantryContainer = ({ hasUnavailable, ...props }) => {
  const dispatch = useDispatch();
  const pantry = useSelector(hasUnavailable ? selectors.getUnavailablePantry : selectors.getAvailablePantry);
  const onItemClick = useCallback(id => dispatch(togglePantryEntry(id)), [dispatch]);

  return <RecipesPantryComponent {...props} pantry={pantry} onItemClick={onItemClick} />;
};

RecipesPantryContainer.propTypes = {
  hasUnavailable: PropTypes.bool,
};

RecipesPantryContainer.defaultProps = {
  hasUnavailable: false,
};

export default RecipesPantryContainer;
