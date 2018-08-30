import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array } from '@storybook/addon-knobs/react';

import Tags from '../Tags';

const stories = storiesOf('Tags', module);
stories.addDecorator(withKnobs);
stories.add('default', () => (
  <Tags
    items={[
      {
        id: 0,
        title: 'maison',
        createdAt: 1535625407824,
        updatedAt: 1535625407824,
      },
      {
        id: 1,
        title: 'bento',
        createdAt: 1535625407832,
        updatedAt: 1535625407832,
      },
    ]}
  />
));

export default stories;
