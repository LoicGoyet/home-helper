import React from 'react';
import { action } from '@storybook/addon-actions';

import { collection, units, products, tags } from '../../../.storybook/mock';
import RecipesCollection from '.';

export default {
  title: 'Components|RecipesCollection',
};

const collectionComputed = {
  ...collection,
  byId: collection.allIds.reduce(
    (acc, id) => ({
      ...acc,
      [id]: {
        ...collection.byId[id],
        tags: collection.byId[id].tags.map(tagId => tags.byId[tagId]),
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

export const story1 = () => (
  <RecipesCollection editHref="/recipes/edit/:id" addItem={action('addItem')} collection={collectionComputed} />
);

story1.story = {
  name: 'default',
};
