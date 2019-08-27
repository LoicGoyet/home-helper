import React from 'react';

import TodosList from 'components/TodosList';
import { tasks, categories, products, units } from 'storybook/mock';

export default {
  title: 'components|TodosList',
};

export const story1 = () => <TodosList tasks={tasks} categories={categories} products={products} units={units} />;

story1.story = {
  name: 'default',
};

export const story2 = () => (
  <TodosList
    tasks={{
      ...tasks,
      byId: Object.keys(tasks.byId).map(id => ({
        ...tasks.byId[id],
        done: true,
      })),
    }}
    categories={categories}
    products={products}
    units={units}
  />
);

story2.story = {
  name: 'all done',
};
