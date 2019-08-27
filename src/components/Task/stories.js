import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from '.';

export default {
  title: 'components|Task',
};

const task = {
  id: 0,
  product: 0,
  quantity: 4,
  unit: 0,
  done: false,
  createdAt: 1535322753837,
  updatedAt: 1535322753837,
};

const category = {
  id: 0,
  title: 'Boulangerie',
  createdAt: 1535322753832,
  updatedAt: 1535322753832,
  color: '#1f6be0',
};

const product = {
  id: 0,
  title: 'Croissants',
  category: 0,
  createdAt: 1535322753834,
  updatedAt: 1535322753834,
};

const unit = {
  id: 0,
  title: 'piece',
  createdAt: 1535322753835,
  updatedAt: 1535322753835,
};

export const story1 = () => <Task task={task} category={category} product={product} unit={unit} />;

story1.story = {
  name: 'default',
};

export const story2 = () => (
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
);

story2.story = {
  name: 'done task',
};
