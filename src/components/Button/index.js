import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled from 'styled-components';

import { getContrastYIQ, alpha, darken, lighten, isLight } from '../../utils/colors';
import COLORS from '../../style/colors';

const Button = props => (
  <Wrapper className={props.className} onClick={props.onClick} style={getThemeVars(props)}>
    {props.children}
  </Wrapper>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.symbol]).isRequired,
  color: ExtraPropTypes.color /* eslint-disable-line react/no-typos, react/no-unused-prop-types */,
  block: PropTypes.bool /* eslint-disable-line react/no-unused-prop-types */,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  color: '#140A43',
  block: false,
  onClick: undefined,
  className: '',
};

export default Button;

const getThemeVars = ({ block, color, style }) => {
  const blockBgColorHover = isLight(color) ? darken(color, 0.15) : lighten(color, 0.15);
  const blockBgColorActive = isLight(color) ? darken(color, 0.3) : lighten(color, 0.3);
  const bgColor = block ? color : COLORS.transparent;

  return {
    '--bg-color': bgColor,
    '--bg-color--hover': block ? blockBgColorHover : alpha(color, 0.1),
    '--bg-color--active': block ? blockBgColorActive : alpha(color, 0.2),
    '--color': block ? getContrastYIQ(bgColor) : color,
    '--box-shadow': `0 0 0 4px ${alpha(color, 0.4)}`,
    ...style,
  };
};

const Wrapper = styled.button`
  text-transform: uppercase;
  font-family: inherit;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: 500;
  cursor: pointer;

  border-radius: 1px;
  border: 0;

  font-size: 0.875rem;
  letter-spacing: 0.08929em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  height: 36px;
  padding: 0 16px;
  position: relative;

  background-color: var(--bg-color);
  color: var(--color);

  &:hover {
    background-color: var(--bg-color--hover);
  }

  &:active {
    background-color: var(--bg-color--active);
  }

  &:focus {
    outline-width: 0;
    box-shadow: var(--box-shadow);
  }
`;
