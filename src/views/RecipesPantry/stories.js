import React from 'react';

import { withReduxProvider, withHashRouter } from 'storybook/decorators';
import RecipesPantry from 'views/RecipesPantry';

export default {
  title: 'views|RecipesPantry',
  decorators: [withReduxProvider, withHashRouter],
};

export const story1 = () => <RecipesPantry />;

story1.story = {
  name: 'default',
};
