import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { getContrastYIQ, alpha, darken, lighten, isLight } from '../../utils/colors';
import COLORS from '../../style/colors';

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    color: ExtraPropTypes.color /* eslint-disable-line react/no-typos, react/no-unused-prop-types */,
    block: PropTypes.bool /* eslint-disable-line react/no-unused-prop-types */,
    square: PropTypes.string,
    style: PropTypes.object,
    href: PropTypes.string,
  };

  static defaultProps = {
    color: '#140A43',
    block: false,
    square: undefined,
    style: {},
    href: undefined,
  };

  get themeVars() {
    const { block, color, style, square } = this.props;

    const blockBgColorHover = isLight(color) ? darken(color, 0.15) : lighten(color, 0.15);
    const blockBgColorActive = isLight(color) ? darken(color, 0.3) : lighten(color, 0.3);
    const bgColor = block ? color : COLORS.transparent;
    const height = square || '36px';
    const minWidth = square ? 'initial' : '64px';
    const width = square || 'initial';
    const padding = square ? '0' : '0 16px';

    return {
      '--bg-color': bgColor,
      '--bg-color--hover': block ? blockBgColorHover : alpha(color, 0.1),
      '--bg-color--active': block ? blockBgColorActive : alpha(color, 0.2),
      '--color': block ? getContrastYIQ(bgColor) : color,
      '--box-shadow': `0 0 0 4px ${alpha(color, 0.4)}`,
      '--height': height,
      '--width': width,
      '--min-width': minWidth,
      '--padding': padding,
      ...style,
    };
  }

  render() {
    const { children, href } = this.props;

    if (href) {
      // Avoid block props to be printed into Link tag
      // eslint-disable-next-line no-unused-vars
      const { block, ...props } = this.props;

      return (
        <LinkWrapper to={href} {...props} style={this.themeVars}>
          {children}
        </LinkWrapper>
      );
    }

    return (
      <Wrapper {...this.props} style={this.themeVars}>
        {children}
      </Wrapper>
    );
  }
}

export default Button;

const BaseStyle = css`
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
  min-width: var(--min-width);
  height: var(--height);
  width: var(--width);
  padding: var(--padding);
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

const Wrapper = styled.button(BaseStyle);
const LinkWrapper = styled(Link)(BaseStyle);
