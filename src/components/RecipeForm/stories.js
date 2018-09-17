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
));

export default stories;
