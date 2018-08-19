import { connect } from 'react-redux';

import AddTask from '../../components/AddTask';
import * as todos from '../../ducks/todos/tasks';

const mapStateToProps = state => ({
  tasks: state.todos.tasks.tasks,
  units: state.todos.tasks.units,
});

const mapDispatchToProps = dispatch => ({
  addTask: (title, category, quantity, quantityUnit) =>
    dispatch(todos.addTask(title, category, quantity, quantityUnit)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
