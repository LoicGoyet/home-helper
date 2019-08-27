import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { getContrastYIQ, alpha, darken, lighten, isLight } from '../../utils/colors';
import COLORS from '../../style/colors';

const Button = ({ isBlock, color, style, square, children, href, exthref, ...props }) => {
  const blockBgColorHover = isLight(color) ? darken(color, 0.15) : lighten(color, 0.15);
  const blockBgColorActive = isLight(color) ? darken(color, 0.3) : lighten(color, 0.3);
  const bgColor = isBlock ? color : COLORS.transparent;
  const height = square || '36px';
  const minWidth = square ? 'initial' : '64px';
  const width = square || 'initial';
  const padding = square ? '0' : '0 16px';

  const themeVars = {
    '--bg-color': bgColor,
    '--bg-color--hover': isBlock ? blockBgColorHover : alpha(color, 0.1),
    '--bg-color--active': isBlock ? blockBgColorActive : alpha(color, 0.2),
    '--color': isBlock ? getContrastYIQ(bgColor) : color,
    '--box-shadow': `0 0 0 4px ${alpha(color, 0.4)}`,
    '--height': height,
    '--width': width,
    '--min-width': minWidth,
    '--padding': padding,
    ...style,
  };

  if (href) {
    return (
      <LinkWrapper to={href} {...props} style={themeVars}>
        {children}
      </LinkWrapper>
    );
  }

  if (exthref) {
    return (
      <ExtLinkWrapper {...props} style={themeVars} href={exthref} target="_blank">
        {children}
      </ExtLinkWrapper>
    );
  }

  return (
    <Wrapper {...props} style={themeVars}>
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  color: ExtraPropTypes.color /* eslint-disable-line react/no-typos, react/no-unused-prop-types */,
  isBlock: PropTypes.bool /* eslint-disable-line react/no-unused-prop-types */,
  square: PropTypes.string,
  style: PropTypes.object,
  href: PropTypes.string,
  exthref: PropTypes.string,
};

Button.defaultProps = {
  color: COLORS.violet,
  isBlock: false,
  square: undefined,
  style: {},
  href: undefined,
  exthref: undefined,
};

export default React.memo(Button);

const BaseStyle = css`
  text-transform: uppercase;
  font-family: inherit;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: 500;
  cursor: pointer;

  border-radius: 0.3125rem;
  border: 0;

  font-size: 0.875rem;
  letter-spacing: 0.08929em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--min-width);
  height: var(--height);
  width: var(--width);
  padding: var(--padding);
  position: relative;
  text-decoration: none;

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

const Wrapper = styled.button(BaseStyle);
const LinkWrapper = styled(Link)(BaseStyle);
const ExtLinkWrapper = styled.a(BaseStyle);
