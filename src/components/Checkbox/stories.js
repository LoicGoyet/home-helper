import React from 'react';
import { boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Checkbox from 'components/Checkbox';

export default {
  title: 'components|Checkbox',
  parameters: {
    backgrounds: [{ name: 'transparent', value: 'rgba(255, 255, 255, 0)', default: true }],
  },
};

export const story1 = () => (
  <Checkbox onChange={action('onChange')} isChecked={boolean('isChecked', false)} color={color('color', '#fff')} />
);

story1.story = {
  name: 'default',
};
