import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../../style/colors';

const Select = ({ reference, children, className, ...props }) => (
  <Wrapper className={className}>
    <El innerRef={reference} {...props}>
      {children}
    </El>
  </Wrapper>
);

Select.propTypes = {
  reference: PropTypes.object,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  reference: {},
  className: undefined,
};

export default React.memo(Select);

const Wrapper = styled.span`
  position: relative;
  display: flex;
  width: 100%;

  &::after {
    position: absolute;
    pointer-events: none;
    z-index: 2;
    content: '';
    height: 0;
    width: 0;
    border-top: 9px solid;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    top: 50%;
    right: 1rem;
    transform: translateY(-4.5px);
  }
`;

const El = styled.select`
  --border-color: ${COLORS.lightgray};
  --outer-shadow-color: transparent;
  --inner-shadow-color: transparent;
  --box-shadow: inset 0 0 0 1px var(--border-color), inset 0 0 0 0.125rem var(--inner-shadow-color),
    0 0 0 0.125rem var(--outer-shadow-color);

  font-size: 1rem;
  padding: 0.75rem;
  border: 0;
  border-radius: 0;
  display: block;
  width: 100%;
  box-shadow: var(--box-shadow);
  background-color: ${COLORS.white};
  /* stylelint-disable property-no-vendor-prefix */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* stylelint-enable property-no-vendor-prefix */

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

  &:not(:placeholder-shown):invalid {
    --border-color: ${COLORS.red};
    --inner-shadow-color: var(--border-color);
  }
`;
