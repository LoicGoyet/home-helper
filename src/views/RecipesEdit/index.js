import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/lib/fa';
import Helmet from 'react-helmet';

import PATHS from 'router/paths';
import Button from 'components/Button';
import EditRecipe from 'container/EditRecipe';

const RecipesEdit = props => (
  <React.Fragment>
    <Helmet>
      <title>Modifier la recette - Home helper</title>
    </Helmet>

    <Header>
      <BackButton href={PATHS.RECIPES_LIST} color="#fff">
        <FaArrowLeft style={{ marginRight: 6 }} />
        Retour
      </BackButton>
    </Header>

    <EditRecipe redirectTo={PATHS.RECIPES_LIST} id={props.match.params.id} />
  </React.Fragment>
);

RecipesEdit.propTypes = {
  match: PropTypes.any.isRequired,
};

export default RecipesEdit;

const Header = styled.header`
  margin-bottom: 1rem;
`;

const BackButton = styled(Button)`
  margin-left: -16px;
`;
