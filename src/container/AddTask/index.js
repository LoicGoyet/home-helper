import { connect } from 'react-redux';

import AddTask from '../../components/AddTask';
import * as todos from '../../ducks/todos';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addTask: (title, category) => dispatch(todos.addTask(title, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
