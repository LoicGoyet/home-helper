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
      icon: TiPlus,
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
      productTitle: 'Pain de mie',
      categoryTitle: 'Boulangerie',
      quantity: 2,
      unitTitle: 'tranche(s)',
    }}
  />
));

export default stories;
