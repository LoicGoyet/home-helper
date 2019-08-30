import React from 'react';

import { withReduxProvider } from 'storybook/decorators';
import EditRecipe from 'containers/recipes/EditRecipe';

export default {
  title: 'Containers|recipes/EditRecipe',
  decorators: [withReduxProvider],
};

export const story1 = () => <EditRecipe id={0} />;

story1.story = {
  name: 'default',
};
