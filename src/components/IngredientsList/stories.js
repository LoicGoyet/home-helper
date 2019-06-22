import React from 'react';
import { storiesOf } from '@storybook/react';

import IngredientsList from '../IngredientsList';

const stories = storiesOf('Components|IngredientsList', module);
stories.add('default', () => (
  <IngredientsList
    ingredients={[
      {
        product: {
          id: 0,
          title: 'Poisson pâné',
          category: 0,
          defaultUnit: 0,
          createdAt: 1535573090701,
          updatedAt: 1535573090701,
        },
        quantity: 2,
        unit: {
          id: 0,
          title: 'pieces',
          createdAt: 1535573090679,
          updatedAt: 1535573090679,
        },
      },
      {
        product: {
          id: 1,
          title: 'Frites',
          category: 0,
          defaultUnit: 0,
          createdAt: 1535573090701,
          updatedAt: 1535573090701,
        },
        quantity: 300,
        unit: {
          id: 1,
          title: 'grams',
          createdAt: 1535573090679,
          updatedAt: 1535573090679,
        },
      },
    ]}
  />
));

export default stories;
