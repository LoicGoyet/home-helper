import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/lib/fa';
import Helmet from 'react-helmet';

import CreateRecipe from 'containers/recipes/CreateRecipe';
import Button from 'components/Button';
import Container from 'components/Container';
import PATHS from 'router/paths';

const RecipesAdd = () => (
  <React.Fragment>
    <Helmet>
      <title>Ajouter une recette - Home helper</title>
    </Helmet>

    <Container>
      <Header>
        <BackButton href={PATHS.RECIPES_LIST} color="#fff">
          <FaArrowLeft style={{ marginRight: 6 }} />
          Retour
        </BackButton>
      </Header>

      <CreateRecipe redirectTo={PATHS.RECIPES_LIST} />
    </Container>
  </React.Fragment>
);

export default RecipesAdd;

const Header = styled.header`
  margin-bottom: 1rem;
`;

const BackButton = styled(Button)`
  margin-left: -16px;
`;
