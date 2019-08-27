import React from 'react';
import { action } from '@storybook/addon-actions';
import { TiPlus } from 'react-icons/lib/ti';

import IngredientForm from 'components/IngredientForm';
import { THEMES } from 'style/colors';
import { categories, products, units } from 'storybook/mock';

export default {
  title: 'components|IngredientForm',
};

export const story1 = () => (
  <IngredientForm onChange={action('onChange')} units={units} products={products} categories={categories} />
);

story1.story = {
  name: 'default',
};

export const story2 = () => (
  <IngredientForm
    onChange={action('onChange')}
    units={units}
    products={products}
    categories={categories}
    button={{
      onClick: action('button onClick'),
      color: THEMES.success,
      icon: TiPlus,
    }}
  />
);

story2.story = {
  name: 'with a button',
};

export const story3 = () => (
  <IngredientForm
    onChange={action('onChange')}
    units={units}
    products={products}
    categories={categories}
    defaultValues={{
      productTitle: 'Pain de mie',
      categoryTitle: 'Boulangerie',
      quantity: 2,
      unitTitle: 'tranche(s)',
    }}
  />
);

story3.story = {
  name: 'with default value',
};
