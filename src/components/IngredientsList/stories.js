import React from 'react';
import { storiesOf } from '@storybook/react';

import IngredientsList from '../IngredientsList';

const stories = storiesOf('IngredientsList', module);
stories.add('default', () => (
  <IngredientsList
    ingredients={[
      {
        title: 'poison pané',
        quantity: {
          number: 2,
          unit: 'pièces',
        },
      },
      {
        title: 'pomme de terre',
        quantity: {
          number: 300,
          unit: 'grammes',
        },
      },
    ]}
  />
));

export default stories;
