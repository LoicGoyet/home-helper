import React from 'react';
import { text } from '@storybook/addon-knobs';

import Card from '.';

export default {
  title: 'Components|Card',
};

export const story1 = () => (
  <Card>
    {text(
      'content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloribus, dolorum, molestias voluptas numquam corrupti iure, obcaecati eos eum iusto accusamus voluptates blanditiis. Quidem vel, quasi voluptatem nostrum sapiente cum.'
    )}
  </Card>
);

story1.story = {
  name: 'default',
};
