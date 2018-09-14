import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TiPlus } from 'react-icons/lib/ti';

import IngredientForm from '../IngredientForm';
import { categories, products, units } from '../../../.storybook/mock';
import { THEMES } from '../../style/colors';

const stories = storiesOf('IngredientForm', module);

stories.add('default', () => (
  <IngredientForm onChange={action('onChange')} units={units} products={products} categories={categories} />
));
stories.add('with a button', () => (
  <IngredientForm
    onChange={action('onChange')}
    units={units}
    products={products}
    categories={categories}
    button={{
      onClick: action('button onClick'),
      color: THEMES.success,
      children: () => <TiPlus size={20} />,
    }}
  />
));
stories.add('with default value', () => (
  <IngredientForm
    onChange={action('onChange')}
    units={units}
    products={products}
    categories={categories}
    defaultValues={{
      product: 'Pain de mie',
      category: 'Boulangerie',
      quantity: 2,
      unit: 'tranche(s)',
    }}
  />
));

export default stories;
