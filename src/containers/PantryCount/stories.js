import React from 'react';

import { withReduxProvider } from 'storybook/decorators';
import PantryCount from 'containers/PantryCount';

export default {
  title: 'Containers|PantryCount',
  decorators: [withReduxProvider],
};

export const story1 = () => <PantryCount />;

story1.story = {
  name: 'default',
};
