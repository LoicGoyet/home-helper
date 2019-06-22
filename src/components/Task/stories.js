import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from '../Task';

export const task = {
  id: 0,
  product: 0,
  quantity: 4,
  unit: 0,
  done: false,
  createdAt: 1535322753837,
  updatedAt: 1535322753837,
};

export const category = {
  id: 0,
  title: 'Boulangerie',
  createdAt: 1535322753832,
  updatedAt: 1535322753832,
  color: '#1f6be0',
};

export const product = {
  id: 0,
  title: 'Croissants',
  category: 0,
  createdAt: 1535322753834,
  updatedAt: 1535322753834,
};

export const unit = {
  id: 0,
  title: 'piece',
  createdAt: 1535322753835,
  updatedAt: 1535322753835,
};

const stories = storiesOf('Components|Task', module);
stories.add('default', () => <Task task={task} category={category} product={product} unit={unit} />);

stories.add('Done task', () => (
  <Task
    task={{
      ...task,
      done: true,
    }}
    category={category}
    product={product}
    unit={unit}
    toggleTask={action('toggleTask')}
  />
));

export default stories;
