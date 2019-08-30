import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import RecipesPantryContainer from 'container/RecipesPantry';
import PantryCount from 'container/PantryCount';

const RecipesPantry = () => (
  <React.Fragment>
    <Helmet>
      <title>Au menu - Home helper</title>
    </Helmet>

    <Count />
    <ListWrapper>
      <Available />
      <Unavailable />
    </ListWrapper>
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

const ListWrapper = styled.div`
  @media (max-width: 38rem) {
    margin-left: -1rem;
    margin-right: -1rem;
  }
`;
