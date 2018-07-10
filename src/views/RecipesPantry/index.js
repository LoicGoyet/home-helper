import React from 'react';

import RecipesPantryContainer from '../../container/RecipesPantry';
import Container from '../../components/Container';
import Button from '../../components/Button';
import PATHS from '../../router/paths';

const RecipesPantry = () => (
  <Container>
    <header>
      <Button href={PATHS.RECIPES_LIST} color="#fff" block>
        Back to recipes
      </Button>
    </header>

    <RecipesPantryContainer />
  </Container>
);

export default RecipesPantry;
