import React from 'react';

import { withReduxProvider } from 'storybook/decorators';
import AddTask from 'containers/todos/AddTask';

export default {
  title: 'Containers|todos/AddTask',
  decorators: [withReduxProvider],
};

export const story1 = () => <AddTask />;

story1.story = {
  name: 'default',
};
