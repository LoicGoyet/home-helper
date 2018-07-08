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
    </header>

    <RecipesList />
  </Container>
);

export default RecipesCollection;
