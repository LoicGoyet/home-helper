import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { collection, units, products, tags } from '../../../.storybook/mock';
import RecipesCollection from '../RecipesCollection';

const story = storiesOf('RecipesCollection', module);

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

story.add('Default', () => <RecipesCollection addItem={action('addItem')} collection={collectionComputed} />);
