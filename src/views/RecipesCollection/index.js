import React from 'react';
import { TiPlus } from 'react-icons/lib/ti';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import RecipesCollectionContainer from 'containers/recipes/RecipesCollection';
import Button from 'components/Button';
import Container from 'components/Container';
import PATHS from 'router/paths';

const RecipesCollection = () => (
  <React.Fragment>
    <Helmet>
      <title>Livre de recettes - Home helper</title>
    </Helmet>

    <Container>
      <AddButton href={PATHS.RECIPES_ADD} color="#fff" isBlock>
        <TiPlus size={26} />
      </AddButton>

      <RecipesCollectionContainer getEditHref={id => PATHS.RECIPES_EDIT.replace(':id', id)} />
    </Container>
  </React.Fragment>
);

export default RecipesCollection;

const AddButton = styled(Button)`
  position: fixed;
  right: 12px;
  bottom: 70px;
  padding: 0;
  width: 50px;
  height: 50px;
  justify-content: center;
  min-width: initial;
  z-index: 10;
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12);
`;
