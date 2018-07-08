import { connect } from 'react-redux';

import AddRecipeInCollection from '../../components/AddRecipeInCollection';
import * as recipes from '../../ducks/recipes';

const mapStateToProps = state => ({
  tasks: state.todos.tasks,
  units: state.todos.units,
});

const mapDispatchToProps = dispatch => ({
  addInCollection: (title, tags, ingredients) => dispatch(recipes.addInCollection(title, tags, ingredients)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRecipeInCollection);
