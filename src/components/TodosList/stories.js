import React from 'react';
import { storiesOf } from '@storybook/react';

import TodosList from '../TodosList';
import { tasks, categories, products, units } from './stories-data';

const stories = storiesOf('TodosList', module);
stories.add('default', () => <TodosList tasks={tasks} categories={categories} products={products} units={units} />);
stories.add('all done', () => (
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
));

export default stories;
