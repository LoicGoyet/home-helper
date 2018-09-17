import { connect } from 'react-redux';

import AddTask from '../../components/AddTask';
import * as todos from '../../ducks/todos/tasks';

const mapStateToProps = state => ({
  tasks: state.todos.tasks,
  units: state.todos.units,
  products: state.todos.products,
  categories: state.todos.categories,
});

const mapDispatchToProps = dispatch => ({
  addTask: (product, category, quantity, unit) => dispatch(todos.addTask(product, category, quantity, unit)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
