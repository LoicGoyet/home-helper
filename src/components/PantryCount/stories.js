import React from 'react';
import { storiesOf } from '@storybook/react';

import PantryCount from '../PantryCount';

const stories = storiesOf('Components|PantryCount', module);
stories.add('default', () => (
  <PantryCount
    counts={[
      {
        label: 'total',
        value: 10,
        isTotal: true,
      },
      {
        label: 'maison',
        value: 3,
      },
      {
        label: 'bento',
        value: 7,
      },
    ]}
  />
));

export default stories;
