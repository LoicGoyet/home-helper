import { connect } from 'react-redux';

import RecipeForm from '../../components/RecipeForm';
import * as recipes from '../../ducks/recipes/collection';

const mapStateToProps = state => ({
  units: state.todos.units,
  products: state.todos.products,
  categories: state.todos.categories,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (title, tags, ingredients, link) => dispatch(recipes.addInCollection(title, tags, ingredients, link)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeForm);
