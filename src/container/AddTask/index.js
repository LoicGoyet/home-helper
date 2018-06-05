import { connect } from 'react-redux';

import AddTask from '../../components/AddTask';
import * as todos from '../../ducks/todos';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addTask: title => dispatch(todos.addTask(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
