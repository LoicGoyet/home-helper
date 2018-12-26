import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import AddTask from '../AddTask';
import { tasks, categories, products, units } from '../../../.storybook/mock';

const stories = storiesOf('AddTask', module);

stories.addDecorator(withBackgrounds([{ name: 'purple', value: '#140A43', default: true }]));
stories.add('default', () => (
  <AddTask tasks={tasks} categories={categories} products={products} units={units} addTask={action('addTask')} />
));

export default stories;
