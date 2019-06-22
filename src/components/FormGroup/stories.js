import React from 'react';
import { storiesOf } from '@storybook/react';

import FormGroup from '../FormGroup';

storiesOf('Components|FormGroup', module)
  .add('default', () => <FormGroup id="form-group-ex-1" label="This is a label" placeholder="Placeholder" />)
  .add('custom type', () => (
    <FormGroup id="form-group-ex-3" label="This is a label" placeholder="Email input" type="email" />
  ))
  .add('with help message', () => (
    <FormGroup help="This is a help message" id="form-group-ex-4" label="This is a label" placeholder="Placeholder" />
  ))
  .add('required', () => <FormGroup id="form-group-ex-5" label="This is a label" placeholder="Placeholder" required />)
  .add('with a pattern', () => (
    <FormGroup id="form-group-ex-6" label="This is a label" pattern=".{10,}" placeholder="Placeholder" required />
  ));
