import React from 'react';
import { boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CheckButton from 'components/CheckButton';

export default {
  title: 'components|CheckButton',
  parameters: {
    backgrounds: [{ name: 'transparent', value: 'rgba(255, 255, 255, 0)', default: true }],
  },
};

export const story1 = () => (
  <CheckButton onClick={action('on click')} isChecked={boolean('isChecked', false)} color={color('color', 'white')} />
);

story1.story = {
  name: 'default',
};
