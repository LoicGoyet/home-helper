import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FaArrowLeft } from 'react-icons/lib/fa';

import CreateRecipe from '../../container/CreateRecipe';
import Button from '../../components/Button';
import PATHS from '../../router/paths';
import * as recipes from '../../ducks/recipes';
import Config from '../../config';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(recipes.fetch()),
});

class RecipesAdd extends React.Component {
  static propTypes = {
    fetchRecipes: PropTypes.func.isRequired,
  };

  componentWillMount() {
    if (Config.USE_MOCK) return;
    this.props.fetchRecipes();
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <BackButton href={PATHS.RECIPES_LIST} color="#fff">
            <FaArrowLeft style={{ marginRight: 6 }} />
            Retour
          </BackButton>
        </Header>

        <CreateRecipe redirectTo={PATHS.RECIPES_LIST} />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesAdd);

const Header = styled.header`
  margin-bottom: 1rem;
`;

const BackButton = styled(Button)`
  margin-left: -16px;
`;
