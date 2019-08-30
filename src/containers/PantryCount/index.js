import React from 'react';
import { useSelector } from 'react-redux';

import PantryCountComponent from 'containers/PantryCount/component';
import { selectors } from 'ducks/recipes/pantry';

const PantryCountContainer = () => {
  const counts = useSelector(selectors.getCounts);
  return <PantryCountComponent counts={counts} />;
};

export default PantryCountContainer;
