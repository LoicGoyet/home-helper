import React from 'react';
import PropTypes from 'prop-types';

import Task from '../../container/Task';

const TasksList = ({ tasksSections, doneTasks }) => (
  <React.Fragment>
    {tasksSections.length > 0 &&
      tasksSections.map(section => (
        <React.Fragment key={section.category}>
          <h2>{section.category}</h2>
          {listTasks(section.tasks)}
        </React.Fragment>
      ))}

    {tasksSections.length > 0 && doneTasks.length > 0 && <hr />}

    {doneTasks.length > 0 && listTasks(doneTasks)}
  </React.Fragment>
);

const listTasks = tasks => <div>{tasks.map(task => <Task task={task} key={`task / ${task.id}`} />)}</div>;

TasksList.propTypes = {
  doneTasks: PropTypes.arrayOf(PropTypes.object),
  tasksSections: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      tasks: PropTypes.arrayOf(PropTypes.object),
    })
  ),
};

TasksList.defaultProps = {
  doneTasks: [],
  tasksSections: [],
};

export default TasksList;
