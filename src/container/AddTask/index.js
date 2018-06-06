import { connect } from 'react-redux';

import AddTask from '../../components/AddTask';
import * as todos from '../../ducks/todos';
import { uniq } from '../../utils/arrays';

const mapStateToProps = state => ({
  categorySuggestions: uniq(state.todos.tasks.map(task => task.category)),
});

const mapDispatchToProps = dispatch => ({
  addTask: (title, category) => dispatch(todos.addTask(title, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
