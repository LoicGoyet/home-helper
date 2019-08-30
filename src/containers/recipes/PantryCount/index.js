import React from 'react';
import { useSelector } from 'react-redux';

import PantryCountComponent from 'containers/recipes/PantryCount/component';
import { selectors } from 'ducks/recipes/pantry';

const PantryCountContainer = props => {
  const counts = useSelector(selectors.getCounts);
  return <PantryCountComponent {...props} counts={counts} />;
};

export default PantryCountContainer;
