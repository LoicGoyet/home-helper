import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RecipeForm from '../RecipeForm';
import { categories, products, units } from '../../../.storybook/mock';

const stories = storiesOf('RecipeForm', module);

stories.add('default', () => (
  <RecipeForm units={units} products={products} categories={categories} onSubmit={action('onSubmit')} />
));
stories.add('with default value', () => (
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
