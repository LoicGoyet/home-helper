import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import AvailableRecipesPantry from '../../container/AvailableRecipesPantry';
import UnavailableRecipesPantry from '../../container/UnavailableRecipesPantry';
import PantryCount from '../../container/PantryCount';

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

const Available = styled(AvailableRecipesPantry)`
  margin-bottom: 1rem;
`;

const Unavailable = styled(UnavailableRecipesPantry)`
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
