import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AddTask from '../AddTask';
import { tasks, categories, products, units } from '../../../.storybook/mock';

const stories = storiesOf('Components|AddTask', module);

stories.add('default', () => (
  <AddTask tasks={tasks} categories={categories} products={products} units={units} addTask={action('addTask')} />
));

export default stories;
