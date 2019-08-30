import React from 'react';

import { withReduxProvider } from 'storybook/decorators';
import TodosList from 'containers/todos/TodosList';

export default {
  title: 'Containers|todos/TodosList',
  decorators: [withReduxProvider],
};

export const story1 = () => <TodosList />;

story1.story = {
  name: 'default',
};
