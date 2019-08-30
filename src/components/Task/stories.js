import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from '.';

export default {
  title: 'components|Task',
};

const task = {
  id: 11,
  product: {
    id: 11,
    title: 'Blanc de Poulet',
    defaultUnit: 0,
    category: { id: 5, title: 'Produits Frais', createdAt: 1535322753861, updatedAt: 1535322753861, color: '#4969c6' },
    createdAt: 1535322753863,
    updatedAt: 1535322753863,
  },
  quantity: 2,
  unit: { id: 0, title: 'piece', createdAt: 1535322753835, updatedAt: 1535322753835 },
  done: false,
  createdAt: 1535322753864,
  updatedAt: 1535322753864,
};

export const story1 = () => <Task task={task} />;

story1.story = {
  name: 'default',
};

export const story2 = () => (
  <Task
    task={{
      ...task,
      done: true,
    }}
    toggleTask={action('toggleTask')}
  />
);

story2.story = {
  name: 'done task',
};
