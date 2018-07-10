import React from 'react';

import RecipesList from '../../container/RecipesList';
import Container from '../../components/Container';
import Button from '../../components/Button';
import PATHS from '../../router/paths';

const RecipesCollection = () => (
  <Container>
    <header>
      <Button href={PATHS.RECIPES_ADD} color="#fff" block>
        Add recipe
      </Button>

      <Button href={PATHS.RECIPES_PANTRY} color="#fff" block>
        Pantry
      </Button>
    </header>

    <RecipesList />
  </Container>
);

export default RecipesCollection;
