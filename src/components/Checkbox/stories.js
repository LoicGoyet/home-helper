import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from '../Checkbox';

const stories = storiesOf('Checkbox', module);
stories.add('default', () => (
  <Checkbox
    onChange={(event, checked) => console.log(`checkbox is ${checked}`)}
    title="example of checkbox"
    defaultChecked
  />
));

export default stories;
