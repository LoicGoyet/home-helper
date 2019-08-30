import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { withReduxProvider } from 'storybook/decorators';
import RecipesEdit from 'views/RecipesEdit';

export default {
  title: 'views|RecipesEdit',
  decorators: [withReduxProvider],
};

export const story1 = () => (
  <MemoryRouter initialEntries={['/recipes/edit/0']} initialIndex={0}>
    <Route exact path="/recipes/edit/:id" component={RecipesEdit} />
  </MemoryRouter>
);

story1.story = {
  name: 'default',
};
