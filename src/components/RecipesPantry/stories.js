import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { collection, units, products, tags } from '../../../.storybook/mock';
import RecipesPantry from '../RecipesPantry';

const story = storiesOf('Components|RecipesPantry', module);

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

story.add('Default', () => <RecipesPantry addItem={action('addItem')} pantry={pantryComputed} />);
