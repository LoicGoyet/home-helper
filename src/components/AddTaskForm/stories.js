import React, { useState, useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AddTaskForm from '../AddTaskForm';

const stories = storiesOf('Components|AddTaskForm', module);

const defaultFields = {
  product: '',
  category: '',
  quantity: '',
  quantityUnit: '',
};

const Container = () => {
  const [fields, setFields] = useState(defaultFields);

  const [activeStep, setActiveStep] = useState(2);

  const onChange = useCallback(
    (e, values) => {
      action('onChange');
      setFields(values);
    },
    [setFields]
  );

  const onFieldsetSubmit = useCallback(
    () => {
      action('onFieldsetSubmit');
      setActiveStep(activeStep + 1);
    },
    [setActiveStep, activeStep]
  );

  const onReset = useCallback(
    () => {
      setActiveStep(0);
      setFields(defaultFields);
    },
    [setActiveStep, setFields]
  );

  const onSubmit = useCallback(() => {
    action('onSubmit');
  }, []);

  return (
    <AddTaskForm
      values={fields}
      onChange={onChange}
      onFieldsetSubmit={onFieldsetSubmit}
      onSubmit={onSubmit}
      activeStep={activeStep}
      onReset={onReset}
    />
  );
};

stories.add('default', () => <Container />);

export default stories;
