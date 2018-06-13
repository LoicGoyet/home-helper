import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '../Input';

const FormGroup = ({ help, id, label, pattern, placeholder, required, type, ...props }) => (
  <Wrapper htmlFor={id}>
    <Label>{label}</Label>
    <Input type={type} id={id} name={id} required={required} placeholder={placeholder} pattern={pattern} {...props} />
    {help !== undefined && <Help>{help}</Help>}
  </Wrapper>
);

FormGroup.propTypes = {
  help: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['date', 'email', 'number', 'password', 'text', 'time']),
};

FormGroup.defaultProps = {
  help: undefined,
  pattern: undefined,
  placeholder: undefined,
  required: false,
  type: 'text',
};

export default FormGroup;

const Wrapper = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

const Label = styled.span`
  display: block;
  margin-bottom: 0.25rem;
`;

const Help = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.75em;
  font-style: italic;
`;
