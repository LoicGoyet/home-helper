import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../../style/colors';

export default class Select extends React.Component {
  static propTypes = {
    reference: PropTypes.object,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    reference: {},
  };

  render() {
    const { reference, children } = this.props;

    return (
      <El innerRef={reference} {...this.props}>
        {children}
      </El>
    );
  }
}

const El = styled.select`
  --border-color: ${COLORS.lightgray};
  --outer-shadow-color: transparent;
  --inner-shadow-color: transparent;
  --box-shadow: inset 0 0 0 1px var(--border-color), inset 0 0 0 0.125rem var(--inner-shadow-color),
    0 0 0 0.125rem var(--outer-shadow-color);

  font-size: 1rem;
  padding: 0.75rem;
  border: 0;
  display: block;
  width: 100%;
  box-shadow: var(--box-shadow);

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
