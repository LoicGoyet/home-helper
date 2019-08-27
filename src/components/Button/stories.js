import React from 'react';
import { text, color, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '.';

export default {
  title: 'Components|Button',
  component: Button,
  parameters: {
    backgrounds: [{ name: 'transparent', value: 'rgba(255, 255, 255, 0)', default: true }],
  },
};

export const story1 = () => (
  <React.Fragment>
    <Button color={color('color', '#140A43')} onClick={action('button click')}>
      {text('children', 'Hello World !')}
    </Button>

    <Button color={color('color', '#140A43')} onClick={action('button click')} isBlock>
      {text('children', 'Hello World !')}
    </Button>
  </React.Fragment>
);

story1.story = {
  name: 'default',
  options: { selectedPanel: 'storybook/knobs/panel' },
};

export const story2 = () => (
  <Button color="#140A43" isBlock>
    Block button
  </Button>
);

story2.story = {
  name: 'isBlock',
};

export const story3 = () => {
  const label = 'square';
  const defaultValue = 50;
  const options = {
    range: true,
    min: 30,
    max: 90,
    step: 1,
  };
  const value = `${number(label, defaultValue, options)}px`;

  return (
    <React.Fragment>
      <Button square={value} color={color('color', '#140A43')} onClick={action('button click')}>
        OK
      </Button>

      <Button square={value} color={color('color', '#140A43')} onClick={action('button click')} isBlock>
        OK
      </Button>
    </React.Fragment>
  );
};

story3.story = {
  name: 'square',
};
