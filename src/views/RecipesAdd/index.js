import React from 'react';

import AddRecipeInCollection from '../../container/AddRecipeInCollection';
import Container from '../../components/Container';
import Button from '../../components/Button';
import PATHS from '../../router/paths';

const RecipesAdd = () => (
  <Container>
    <header>
      <Button href={PATHS.RECIPES_LIST} color="#fff" block>
        Back to recipes
      </Button>
    </header>

    <AddRecipeInCollection />
  </Container>
);

export default RecipesAdd;
