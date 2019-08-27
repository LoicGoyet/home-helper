import React from 'react';

import PantryCount from '.';

export default {
  title: 'Components|PantryCount',
};

export const story1 = () => (
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
);

story1.story = {
  name: 'default',
};
