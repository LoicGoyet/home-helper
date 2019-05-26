import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Card from '../Card';

const stories = storiesOf('Card', module);
stories.add('default', () => (
  <Card>
    {text(
      'content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloribus, dolorum, molestias voluptas numquam corrupti iure, obcaecati eos eum iusto accusamus voluptates blanditiis. Quidem vel, quasi voluptatem nostrum sapiente cum.'
    )}
  </Card>
));

export default stories;
