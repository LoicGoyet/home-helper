import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/lib/fa';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Collection from '../../container/RecipesCollection';
import PantryCount from '../../container/PantryCount';
import Button from '../../components/Button';
import PATHS from '../../router/paths';
import * as recipes from '../../ducks/recipes';
import Config from '../../config';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(recipes.fetch()),
});

class RecipesCollection extends React.Component {
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
        <AddButton href={PATHS.RECIPES_ADD} color="#fff" block>
          <FaPlus size={30} />
        </AddButton>

        {/* <Count /> */}
        <Collection />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesCollection);

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
`;

const Count = styled(PantryCount)`
  position: sticky;
  z-index: 10;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
