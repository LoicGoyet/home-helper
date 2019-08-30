import React from 'react';

import FormGroup from 'components/FormGroup';
import Input from 'components/Input';

export default {
  title: 'components|FormGroup',
};

export const story1 = () => (
  <FormGroup label="This is a label">
    <Input placeholder="Placeholder" />
  </FormGroup>
);

story1.story = {
  name: 'default',
};

export const story2 = () => (
  <FormGroup help="This is a help message" label="This is a label">
    <Input placeholder="Placeholder" />
  </FormGroup>
);

story2.story = {
  name: 'with help message',
};
