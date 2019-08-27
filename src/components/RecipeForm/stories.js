import React from 'react';
import { action } from '@storybook/addon-actions';

import RecipeForm from 'components/RecipeForm';
import { categories, products, units } from 'storybook/mock';

export default {
  title: 'components|RecipeForm',
};

export const story1 = () => (
  <RecipeForm units={units} products={products} categories={categories} onSubmit={action('onSubmit')} />
);

story1.story = {
  name: 'default',
};

export const story2 = () => (
  <RecipeForm
    units={units}
    products={products}
    categories={categories}
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
  name: 'with default value',
};
