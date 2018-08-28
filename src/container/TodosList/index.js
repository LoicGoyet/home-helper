import { connect } from 'react-redux';

import TodosList from '../../components/TodosList';
import { isIn } from '../../utils/arrays';
import * as todos from '../../ducks/todos/tasks';

const mapStateToProps = state => {
  const { tasks, products, categories, units } = state.todos;

  return { tasks, products, categories, units };
};

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(todos.toggleTask(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
