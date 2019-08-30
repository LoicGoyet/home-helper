import React from 'react';

import { withReduxProvider } from 'storybook/decorators';
import RecipesCollection from 'containers/recipes/RecipesCollection';

export default {
  title: 'Containers|recipes/RecipesCollection',
  decorators: [withReduxProvider],
};

export const story1 = () => <RecipesCollection getEditHref={() => undefined} />;

story1.story = {
  name: 'default',
};
