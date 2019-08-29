import React from 'react';
import * as R from 'ramda';
import { action } from '@storybook/addon-actions';

import TodoList from 'components/TodoList';
import { tasks, categories, products, units } from 'storybook/mock';
import { sortTasksByDateDesc, filterTasksByUndone, reshapeTasksByCategories, unfoldTasks } from 'utils/tasks';

export default {
  title: 'components|TodoList',
  component: TodoList,
};

const tasksByCategory = R.compose(
  reshapeTasksByCategories(products, units, categories),
  sortTasksByDateDesc,
  filterTasksByUndone
)(tasks);

export const story1 = () => (
  <TodoList tasks={R.path(['byId', tasksByCategory.allIds[0]], tasksByCategory)} onTaskClick={action('onTaskClick')} />
);

story1.story = {
  name: 'New default',
};

export const story2 = () => (
  <TodoList
    tasks={R.path(['byId', tasksByCategory.allIds[0]], tasksByCategory)}
    heading={R.path(['byId', tasksByCategory.allIds[0], 'title'], categories)}
    onTaskClick={action('onTaskClick')}
  />
);

story2.story = {
  name: 'New with heading',
};

export const story3 = () => {
  const doneTasks = R.compose(
    unfoldTasks(products, units, categories),
    sortTasksByDateDesc,
    tsks => {
      const allTasksDoneById = R.map(task => ({ ...task, done: true }), tsks.byId);

      return {
        ...tsks,
        byId: allTasksDoneById,
      };
    }
  )(tasks);

  return <TodoList tasks={doneTasks} limit={5} onTaskClick={action('onTaskClick')} />;
};

story3.story = {
  name: 'New with done tasks and limit',
};
