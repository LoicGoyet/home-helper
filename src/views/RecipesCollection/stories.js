import React from 'react';

import { withReduxProvider, withHashRouter } from 'storybook/decorators';
import RecipesCollection from 'views/RecipesCollection';

export default {
  title: 'views|RecipesCollection',
  decorators: [withReduxProvider, withHashRouter],
};

export const story1 = () => <RecipesCollection />;

story1.story = {
  name: 'default',
};
