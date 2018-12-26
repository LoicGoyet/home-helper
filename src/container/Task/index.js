import { connect } from 'react-redux';

import Task from '../../components/Task';
import * as todos from '../../ducks/todos/tasks';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTask: () => dispatch(todos.toggleTask(ownProps.task.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
