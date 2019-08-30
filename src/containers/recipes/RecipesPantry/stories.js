import React from 'react';

import { withReduxProvider } from 'storybook/decorators';
import RecipesPantry from 'containers/recipes/RecipesPantry';

export default {
  title: 'Containers|recipes/RecipesPantry',
  decorators: [withReduxProvider],
};

export const story1 = () => <RecipesPantry />;

story1.story = {
  name: 'Available Recipes Pantry',
};

export const story2 = () => <RecipesPantry hasUnavailable />;

story2.story = {
  name: 'Unavailable Recipes Pantry',
};
