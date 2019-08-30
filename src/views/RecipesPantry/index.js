import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Container from 'components/Container';
import RecipesPantryContainer from 'containers/recipes/RecipesPantry';
import PantryCount from 'containers/recipes/PantryCount';

const RecipesPantry = () => (
  <React.Fragment>
    <Helmet>
      <title>Au menu - Home helper</title>
    </Helmet>

    <Container>
      <Count />
      <Available />
      <Unavailable />
    </Container>
  </React.Fragment>
);

export default RecipesPantry;

const Available = styled(RecipesPantryContainer)`
  margin-bottom: 1rem;
`;

const Unavailable = styled(RecipesPantryContainer).attrs({
  hasUnavailable: true,
})`
  margin-bottom: 1rem;
`;

const Count = styled(PantryCount)`
  margin-bottom: 1rem;
`;
