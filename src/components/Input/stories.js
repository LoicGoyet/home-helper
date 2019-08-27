import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from '.';

export default {
  title: 'Components|Input',
};

export const story1 = () => <Input onChange={action('onChange')} />;
story1.story = {
  name: 'default',
};

export const story2 = () => <Input onChange={action('onChange')} placeholder="Hello world !" />;
story2.story = {
  name: 'with placeholder',
};

export const story3 = () => <Input onChange={action('onChange')} value="Hello world !" />;
story3.story = {
  name: 'with value',
};
