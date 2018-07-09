import React from 'react';
import { storiesOf } from '@storybook/react';

import IngredientsList from '../IngredientsList';

const stories = storiesOf('IngredientsList', module);
stories.add('default', () => (
  <IngredientsList
    ingredients={[
      {
        title: 'poison pané',
        quantity: 2,
        quantityUnit: 'pièces',
      },
      {
        title: 'pomme de terre',
        quantity: 300,
        quantityUnit: 'grammes',
      },
    ]}
  />
));

export default stories;
