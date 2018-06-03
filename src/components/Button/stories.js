import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs/react';
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

export default stories;
