import React from 'react';

import { withReduxProvider, withHashRouter } from 'storybook/decorators';
import Todos from 'views/Todos';

export default {
  title: 'views|Todos',
  decorators: [withReduxProvider, withHashRouter],
};

export const story1 = () => <Todos />;

story1.story = {
  name: 'default',
};
