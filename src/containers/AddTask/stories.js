import React from 'react';

import { withReduxProvider, withSuggestionLists } from 'storybook/decorators';
import AddTask from 'containers/AddTask';

export default {
  title: 'Containers|AddTask',
  decorators: [withSuggestionLists, withReduxProvider],
};

export const story1 = () => <AddTask />;

story1.story = {
  name: 'default',
};
