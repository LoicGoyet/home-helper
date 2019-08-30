import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as tasksDuck from 'ducks/todos/tasks';
import * as categoriesDuck from 'ducks/todos/categories';
import TodoList from 'components/TodoList';

const TodosList = () => {
  const dispatch = useDispatch();
  const undoneTasksByCategories = useSelector(tasksDuck.selectors.getUndoneTasksByCategories);
  const doneTasks = useSelector(tasksDuck.selectors.getDoneTasks);
  const categories = useSelector(categoriesDuck.selectors.getCategories);
  const toggleTask = useCallback(id => dispatch(tasksDuck.toggleTask(id)), [dispatch]);

  return (
    <React.Fragment>
      {undoneTasksByCategories.allIds.map(categoryId => {
        const tasks = undoneTasksByCategories.byId[categoryId];
        const category = categories.byId[categoryId];
        return <TodoList key={categoryId} tasks={tasks} heading={category.title} onTaskClick={toggleTask} />;
      })}
      <TodoList tasks={doneTasks} onTaskClick={toggleTask} limit={5} />
    </React.Fragment>
  );
};

export default TodosList;
