import React from 'react';

import { withReduxProvider, withSuggestionLists } from 'storybook/decorators';
import AddTask from 'container/AddTask';

export default {
  title: 'Container|AddTask',
  decorators: [withSuggestionLists, withReduxProvider],
};

export const story1 = () => <AddTask />;

story1.story = {
  name: 'default',
};
