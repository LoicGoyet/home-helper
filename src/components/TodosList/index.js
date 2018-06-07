import React from 'react';
import PropTypes from 'prop-types';

import TasksList from '../TasksList';
import TodosSection from '../TodosSection';

const TodosList = ({ tasksSections, doneTasks, updateCategory }) => (
  <React.Fragment>
    {tasksSections.length > 0 &&
      tasksSections.map(section => (
        <TodosSection key={section.category} section={section} updateCategory={updateCategory} />
      ))}

    {tasksSections.length > 0 && doneTasks.length > 0 && <hr />}

    {doneTasks.length > 0 && <TasksList tasks={doneTasks} />}
  </React.Fragment>
);

TodosList.propTypes = {
  doneTasks: PropTypes.arrayOf(PropTypes.object),
  tasksSections: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      tasks: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  updateCategory: PropTypes.func.isRequired,
};

TodosList.defaultProps = {
  doneTasks: [],
  tasksSections: [],
};

export default TodosList;
