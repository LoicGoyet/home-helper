import React from 'react';

import Select from 'components/Select';

export default {
  title: 'components|Select',
};

export const story1 = () => (
  <Select>
    <option value="piece">pièce</option>
    <option value="grams">grammes</option>
    <option value="milliliters">millilitres</option>
  </Select>
);

story1.story = {
  name: 'default',
};
