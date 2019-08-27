import React from 'react';

import FormGroup from 'components/FormGroup';

export default {
  title: 'components|FormGroup',
};

export const story1 = () => <FormGroup id="form-group-ex-1" label="This is a label" placeholder="Placeholder" />;

story1.story = {
  name: 'default',
};

export const story2 = () => (
  <FormGroup id="form-group-ex-3" label="This is a label" placeholder="Email input" type="email" />
);

story2.story = {
  name: 'custom type',
};

export const story3 = () => (
  <FormGroup help="This is a help message" id="form-group-ex-4" label="This is a label" placeholder="Placeholder" />
);

story3.story = {
  name: 'with help message',
};

export const story4 = () => (
  <FormGroup id="form-group-ex-5" label="This is a label" placeholder="Placeholder" required />
);

story4.story = {
  name: 'required',
};

export const story5 = () => (
  <FormGroup id="form-group-ex-6" label="This is a label" pattern=".{10,}" placeholder="Placeholder" required />
);

story5.story = {
  name: 'with a pattern',
};
