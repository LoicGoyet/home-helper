import React from 'react';

import { withReduxProvider, withSuggestionLists } from 'storybook/decorators';
import PantryCount from 'containers/PantryCount';

export default {
  title: 'Containers|PantryCount',
  decorators: [withSuggestionLists, withReduxProvider],
};

export const story1 = () => <PantryCount />;

story1.story = {
  name: 'default',
};
