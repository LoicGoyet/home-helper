import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { path } from 'ramda';

import RecipeForm from 'containers/RecipeForm';
import * as recipes from 'ducks/recipes/collection';
import PATHS from 'router/paths';

const mapStateToProps = state => ({
  units: state.todos.units,
  products: state.todos.products,
  categories: state.todos.categories,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: bindActionCreators(recipes.addInCollection, dispatch),
});

class RecipeFormContainer extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    redirectTo: PropTypes.oneOf(Object.values(PATHS)),
  };

  static defaultProps = {
    redirectTo: undefined,
  };

  state = {
    redirect: {
      enabled: false,
      recipeTitle: undefined,
    },
  };

  onSubmit = recipe => {
    this.props.onSubmit(recipe);
    const recipeTitle = recipe.title;

    this.setState({
      redirect: {
        ...this.state.redirect,
        enabled: true,
        recipeTitle,
      },
    });
  };

  render = () => {
    const redirect = path(['redirect', 'enabled'], this.state) && !!this.props.redirectTo;

    return (
      <React.Fragment>
        {redirect && (
          <Redirect
            to={{
              pathname: this.props.redirectTo,
              state: {
                newRecipe: {
                  title: path(['redirect', 'recipeTitle'], this.state),
                },
              },
            }}
          />
        )}

        <RecipeForm onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeFormContainer);
