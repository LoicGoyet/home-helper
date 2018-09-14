import { connect } from 'react-redux';

import AddRecipeInCollection from '../../components/AddRecipeInCollection';
import * as recipes from '../../ducks/recipes';

const mapStateToProps = state => ({
  tasks: state.todos.tasks.tasks,
  units: state.todos.tasks.units,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (title, tags, ingredients, link) => dispatch(recipes.addInCollection(title, tags, ingredients, link)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRecipeInCollection);
