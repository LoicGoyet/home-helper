import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AvailableRecipesPantry from '../../container/AvailableRecipesPantry';
import UnavailableRecipesPantry from '../../container/UnavailableRecipesPantry';
import * as recipes from '../../ducks/recipes';
import Config from '../../config';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(recipes.fetch()),
});

class RecipesPantry extends React.Component {
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
        <Available />
        <Unavailable />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesPantry);

const Available = styled(AvailableRecipesPantry)`
  margin-bottom: 1rem;
`;

const Unavailable = styled(UnavailableRecipesPantry)`
  margin-bottom: 1rem;
`;
