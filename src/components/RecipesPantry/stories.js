import React from 'react';
import { action } from '@storybook/addon-actions';

import { collection, units, products, tags } from 'storybook/mock';
import RecipesPantry from 'components/RecipesPantry';

export default {
  title: 'components|RecipesPantry',
};

const pantryComputed = {
  ...collection,
  byId: collection.allIds.reduce(
    (acc, id) => ({
      ...acc,
      [id]: {
        ...collection.byId[id],
        tags: collection.byId[id].tags.map(tagId => tags.byId[tagId]),
        available: true,
        ingredients: collection.byId[id].ingredients.map(ingredient => ({
          ...ingredient,
          product: products.byId[ingredient.product],
          unit: units.byId[ingredient.unit],
        })),
      },
    }),
    {}
  ),
};

export const story1 = () => <RecipesPantry addItem={action('addItem')} pantry={pantryComputed} />;

story1.story = {
  name: 'default',
};
