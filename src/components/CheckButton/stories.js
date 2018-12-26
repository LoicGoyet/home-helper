import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CheckButton from '../CheckButton';

const stories = storiesOf('CheckButton', module);
stories.add('default', () => (
  <CheckButton onClick={action('on click')} isChecked={boolean('isChecked', false)} color={color('color', '#140A43')} />
));

export default stories;
