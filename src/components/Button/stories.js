import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

const stories = storiesOf('Button', module);
stories.add('default', () => (
  <React.Fragment>
    <Button color={color('color', '#140A43')} onClick={action('button click')}>
      {text('children', 'Hello World !')}
    </Button>

    <Button color={color('color', '#140A43')} onClick={action('button click')} block>
      {text('children', 'Hello World !')}
    </Button>
  </React.Fragment>
));
stories.add('square', () => {
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

      <Button square={value} color={color('color', '#140A43')} onClick={action('button click')} block>
        OK
      </Button>
    </React.Fragment>
  );
});

export default stories;
