import React from 'react';

import { withReduxProvider, withSuggestionLists } from 'storybook/decorators';
import CreateRecipe from 'containers/CreateRecipe';

export default {
  title: 'Containers|CreateRecipe',
  decorators: [withSuggestionLists, withReduxProvider],
};

export const story1 = () => <CreateRecipe />;

story1.story = {
  name: 'default',
};
