import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from '../Select';

const stories = storiesOf('Components|Select', module);
stories.add('default', () => (
  <Select>
    <option value="piece">pièce</option>
    <option value="grams">grammes</option>
    <option value="milliliters">millilitres</option>
  </Select>
));

export default stories;
