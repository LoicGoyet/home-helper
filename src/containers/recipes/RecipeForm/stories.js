import React from 'react';
import { action } from '@storybook/addon-actions';

import { withReduxProvider } from 'storybook/decorators';
import RecipeForm from 'containers/recipes/RecipeForm';

export default {
  title: 'Containers|recipes/RecipeForm',
  decorators: [withReduxProvider],
};

export const story1 = () => <RecipeForm onSubmit={action('onSubmit')} />;

story1.story = {
  name: 'default',
};

export const story2 = () => (
  <RecipeForm
    onSubmit={action('onSubmit')}
    defaultValues={{
      title: 'Fish & Chips',
      link: '#',
      ingredients: [
        {
          productTitle: 'Pain de mie',
          categoryTitle: 'Boulangerie',
          quantity: 2,
          unitTitle: 'tranche(s)',
        },
        {
          productTitle: 'Beurre',
          categoryTitle: 'Produits Frais',
          quantity: 20,
          unitTitle: 'grammes',
        },
      ],
    }}
  />
);

story2.story = {
  name: 'with values',
};
