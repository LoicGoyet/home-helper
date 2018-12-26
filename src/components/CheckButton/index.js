import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled from 'styled-components';
import { MdCheck } from 'react-icons/lib/md';

import COLORS from '../../style/colors';
import { getContrastYIQ, alpha } from '../../utils/colors';

const CheckButton = props => (
  <Element {...props} style={getThemeVars(props)}>
    <Icon />
  </Element>
);

CheckButton.propTypes = {
  onClick: PropTypes.func,
  isChecked: PropTypes.bool,
  color: ExtraPropTypes.color /* eslint-disable-line react/no-typos */,
};

CheckButton.defaultProps = {
  onClick: undefined,
  isChecked: false,
  color: '#140A43',
};

export default CheckButton;

const getThemeVars = ({ isChecked, color }) => ({
  '--size': '1rem',
  '--border-color': color,
  '--color': isChecked ? getContrastYIQ(color) : color,
  '--bg-color': isChecked ? color : COLORS.transparent,
  '--box-shadow--focus': `0 0 0 4px ${alpha(color, 0.4)}`,
});

const Element = styled.button`
  font-size: var(--size);
  height: 2.25rem;
  width: 2.25rem;
  border: 3px solid var(--border-color);
  display: inline-flex;
  border-radius: 3px;
  background-color: var(--bg-color);
  color: var(--color);
  padding: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    outline-width: 0;
    box-shadow: var(--box-shadow--focus);
  }
`;

const Icon = styled(MdCheck)`
  font-size: 1.4em;
`;
