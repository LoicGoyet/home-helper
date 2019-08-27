import React from 'react';

import { withReduxProvider } from '../../../.storybook/decorators';
import AddTask from '.';

export default {
  title: 'Container|AddTask',
  decorators: [withReduxProvider],
};

export const story1 = () => <AddTask />;

story1.story = {
  name: 'default',
};
