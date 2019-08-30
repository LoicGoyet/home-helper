import React from 'react';
import { action } from '@storybook/addon-actions';

import { withReduxProvider, withSuggestionLists } from 'storybook/decorators';
import RecipeForm from 'containers/RecipeForm';

export default {
  title: 'Containers|RecipeForm',
  decorators: [withSuggestionLists, withReduxProvider],
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
      tags: ['maison', 'bento'],
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
