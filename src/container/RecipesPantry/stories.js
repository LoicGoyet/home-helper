import React from 'react';

import { withReduxProvider, withSuggestionLists } from 'storybook/decorators';
import RecipesPantry from 'container/RecipesPantry';

export default {
  title: 'Container|RecipesPantry',
  decorators: [withSuggestionLists, withReduxProvider],
};

export const story1 = () => <RecipesPantry />;

story1.story = {
  name: 'Available Recipes Pantry',
};

export const story2 = () => <RecipesPantry hasUnavailable />;

story2.story = {
  name: 'Unavailable Recipes Pantry',
};
