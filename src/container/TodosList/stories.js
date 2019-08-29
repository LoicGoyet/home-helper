import React from 'react';

import { withReduxProvider, withSuggestionLists } from 'storybook/decorators';
import TodosList from 'container/TodosList';

export default {
  title: 'Container|TodosList',
  decorators: [withSuggestionLists, withReduxProvider],
};

export const story1 = () => <TodosList />;

story1.story = {
  name: 'default',
};
