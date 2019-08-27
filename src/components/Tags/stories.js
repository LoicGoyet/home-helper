import React from 'react';

import Tags from '.';

export default {
  title: 'Components|Tags',
};

export const story1 = () => (
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
);

story1.story = {
  name: 'default',
};
