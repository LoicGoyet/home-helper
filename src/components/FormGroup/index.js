import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormGroup = ({ help, label, children, ...props }) => (
  <Wrapper {...props}>
    <Label>{label}</Label>
    {children}
    {!!help && <Help>{help}</Help>}
  </Wrapper>
);

FormGroup.propTypes = {
  help: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['date', 'email', 'number', 'password', 'text', 'time']),
  children: PropTypes.any.isRequired,
};

FormGroup.defaultProps = {
  id: undefined,
  help: undefined,
  type: 'text',
};

export default React.memo(FormGroup);

const Wrapper = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

const Label = styled.span`
  display: block;
  margin-bottom: 0.25rem;
`;

const Help = styled.span`
  margin: 0.5rem 0 0;
  font-size: 0.75em;
  font-style: italic;
`;
