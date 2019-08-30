import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { path, prop } from 'ramda';
import Helmet from 'react-helmet';

import RecipeForm from 'containers/recipes/RecipeForm';
import * as recipes from 'ducks/recipes/collection';
import PATHS from 'router/paths';

const mapStateToProps = (state, ownProps) => {
  const { units, products, categories } = state.todos;
  const recipe = path(['collection', 'byId', ownProps.id], state.recipes);

  const title = prop('title', recipe);
  const tags = (prop('tags', recipe) || []).map(tagId => path(['byId', tagId, 'title'], state.recipes.tags));
  const link = prop('link', recipe);
  const ingredients = (prop('ingredients', recipe) || []).map(ingredient => {
    const { quantity } = ingredient;
    const unitTitle = path(['byId', ingredient.unit, 'title'], units);
    const productTitle = path(['byId', ingredient.product, 'title'], products);
    const category = path(['byId', ingredient.product, 'category'], products);
    const categoryTitle = path(['byId', category, 'title'], categories);

    return {
      productTitle,
      quantity,
      unitTitle,
      categoryTitle,
    };
  });

  return {
    units,
    products,
    categories,
    defaultValues: {
      title,
      tags,
      link,
      ingredients,
    },
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: bindActionCreators(recipes.updateInCollection, dispatch),
});

class RecipeFormContainer extends React.Component {
  static propTypes = {
    defaultValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    redirectTo: PropTypes.oneOf(Object.values(PATHS)),
    id: PropTypes.any.isRequired,
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
    this.props.onSubmit(this.props.id, recipe);
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
        {path(['defaultValues', 'title'], this.props) && (
          <Helmet>
            <title>Modifier la recette {this.props.defaultValues.title} - Home helper</title>
          </Helmet>
        )}

        {/* redirect une fois le formulaire soumi */}
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

        <RecipeForm defaultValues={this.props.defaultValues} onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeFormContainer);
