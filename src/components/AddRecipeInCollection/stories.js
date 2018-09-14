import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AddRecipeInCollection from '../AddRecipeInCollection';
import { categories, products, units } from '../../../.storybook/mock';

const stories = storiesOf('AddRecipeInCollection', module);

stories.add('default', () => (
  <AddRecipeInCollection units={units} products={products} categories={categories} onSubmit={action('onSubmit')} />
));
stories.add('with default value', () => (
  <AddRecipeInCollection
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
          product: 'Pain de mie',
          category: 'Boulangerie',
          quantity: 2,
          unit: 'tranche(s)',
        },
        {
          product: 'Beurre',
          category: 'Produits Frais',
          quantity: 20,
          unit: 'grammes',
        },
      ],
    }}
  />
));

export default stories;
