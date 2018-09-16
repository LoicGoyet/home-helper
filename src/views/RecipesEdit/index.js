import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/lib/fa';

import PATHS from '../../router/paths';
import Button from '../../components/Button';
import EditRecipe from '../../container/EditRecipe';

class RecipesEdit extends React.Component {
  static propTypes = {
    match: PropTypes.any.isRequired,
  };

  render = () => (
    <React.Fragment>
      <Header>
        <BackButton href={PATHS.RECIPES_LIST} color="#fff">
          <FaArrowLeft style={{ marginRight: 6 }} />
          Retour
        </BackButton>
      </Header>
      <EditRecipe redirectTo={PATHS.RECIPES_LIST} id={this.props.match.params.id} />
    </React.Fragment>
  );
}

export default RecipesEdit;

const Header = styled.header`
  margin-bottom: 1rem;
`;

const BackButton = styled(Button)`
  margin-left: -16px;
`;
