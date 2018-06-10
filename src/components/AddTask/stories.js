import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import backgrounds from '@storybook/addon-backgrounds';

import AddTask from '../AddTask';

const stories = storiesOf('AddTask', module);

const tasks = [
  {
    id: 0,
    title: 'Tomates',
    category: 'Fruits & Légumes',
    done: false,
  },
  {
    id: 1,
    title: 'Céréales',
    category: 'Épicerie Sucrée',
    done: false,
  },
  {
    id: 2,
    title: 'Céréales',
    category: 'Épicerie Sucrée',
    done: false,
  },
  {
    id: 3,
    title: 'Fraises',
    category: 'Fruits & Légumes',
    done: false,
  },
];

stories.addDecorator(backgrounds([{ name: 'purple', value: '#140A43', default: true }]));
stories.add('default', () => <AddTask tasks={tasks} addTask={action('addTask')} />);

export default stories;
