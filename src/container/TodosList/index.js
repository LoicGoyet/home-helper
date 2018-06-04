import { connect } from 'react-redux';

import TasksList from '../../components/TasksList';

const mapStateToProps = state => ({
  tasks: state.todos.tasks.sort((taskA, taskB) => taskA.done - taskB.done),
});

export default connect(mapStateToProps)(TasksList);
