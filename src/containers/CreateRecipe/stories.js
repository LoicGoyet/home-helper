import React from 'react';

import { withReduxProvider } from 'storybook/decorators';
import CreateRecipe from 'containers/CreateRecipe';

export default {
  title: 'Containers|CreateRecipe',
  decorators: [withReduxProvider],
};

export const story1 = () => <CreateRecipe />;

story1.story = {
  name: 'default',
};
