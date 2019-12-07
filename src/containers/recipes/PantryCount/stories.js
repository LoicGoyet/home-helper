import React from 'react';

import { withReduxProvider } from 'storybook/decorators';
import PantryCount from 'containers/recipes/PantryCount';

export default {
  title: 'Containers|recipes/PantryCount',
  decorators: [withReduxProvider],
};

export const defaultStory = () => <PantryCount />;

defaultStory.story = {
  name: 'default',
};
