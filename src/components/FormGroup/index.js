import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../../style/colors';

const FormGroup = ({ help, id, label, pattern, placeholder, required, type }) => (
  <Wrapper htmlFor={id}>
    <Label>{label}</Label>
    <Input type={type} id={id} name={id} required={required} placeholder={placeholder} pattern={pattern} />
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

const Input = styled.input`
  --border-color: ${COLORS.lightgray};
  --outer-shadow-color: transparent;
  --inner-shadow-color: transparent;

  font-size: 1rem;
  padding: 0.75rem;
  border: 0;
  border-radius: 0.125rem;
  display: block;
  width: 100%;
  box-shadow: inset 0 0 0 1px var(--border-color), inset 0 0 0 0.125rem var(--inner-shadow-color),
    0 0 0 0.125rem var(--outer-shadow-color);

  &:not(:placeholder-shown):invalid {
    --border-color: ${COLORS.red};
    --inner-shadow-color: var(--border-color);
  }

  &:focus {
    --border-color: ${COLORS.blue};
    --inner-shadow-color: var(--border-color);
    --outer-shadow-color: var(--border-color);
    outline-width: 0;

    /* &[pattern]:invalid { */
    &:invalid {
      --border-color: ${COLORS.red};
    }

    /* &[pattern]:valid { */
    &:valid {
      --border-color: ${COLORS.green};
    }
  }
`;

const Help = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.75em;
  font-style: italic;
`;
