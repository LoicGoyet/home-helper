import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

const TasksList = ({ tasks }) => <div>{tasks.map(task => <Task task={task} key={`task / ${task.id}`} />)}</div>;

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

TasksList.defaultProps = {
  tasks: [],
};

export default TasksList;
