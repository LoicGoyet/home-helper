import React from 'react';

import { withReduxProvider, withHashRouter } from 'storybook/decorators';
import RecipesAdd from 'views/RecipesAdd';

export default {
  title: 'views|RecipesAdd',
  decorators: [withReduxProvider, withHashRouter],
};

export const story1 = () => <RecipesAdd />;

story1.story = {
  name: 'default',
};
