import React from 'react';

import { withReduxProvider, withSuggestionLists } from 'storybook/decorators';
import RecipesCollection from 'container/RecipesCollection';

export default {
  title: 'container|RecipesCollection',
  decorators: [withSuggestionLists, withReduxProvider],
};

export const story1 = () => <RecipesCollection getEditHref={() => undefined} />;

story1.story = {
  name: 'default',
};
