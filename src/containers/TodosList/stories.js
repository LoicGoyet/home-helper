import React from 'react';

import { withReduxProvider, withSuggestionLists } from 'storybook/decorators';
import TodosList from 'containers/TodosList';

export default {
  title: 'Containers|TodosList',
  decorators: [withSuggestionLists, withReduxProvider],
};

export const story1 = () => <TodosList />;

story1.story = {
  name: 'default',
};
