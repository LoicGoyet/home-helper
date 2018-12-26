import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled from 'styled-components';

import COLORS, { THEMES, isTheme } from '../../style/colors';
import { getContrastYIQ } from '../../utils/colors';

class Pill extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.symbol]).isRequired,
    isBlock: PropTypes.bool,
    style: PropTypes.object,
    color: PropTypes.oneOfType([
      ExtraPropTypes.color /* eslint-disable-line react/no-typos, react/no-unused-prop-types */,
      PropTypes.oneOf(Object.keys(THEMES)),
    ]),
  };

  static defaultProps = {
    color: 'default',
    isBlock: false,
    style: {},
  };

  get themeVars() {
    const { isBlock, color, style } = this.props;

    const themeColor = isTheme(color) ? THEMES[color] : color;
    const bgColor = isBlock ? themeColor : COLORS.transparent;

    return {
      '--bg-color': bgColor,
      '--color': isBlock ? getContrastYIQ(bgColor) : themeColor,
      '--border-color': themeColor,
      ...style,
    };
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper {...this.props} style={this.themeVars}>
        {children}
      </Wrapper>
    );
  }
}

export default Pill;

const Wrapper = styled.span`
  display: inline-flex;
  background-color: var(--bg-color);
  color: var(--color);
  border: 2px solid var(--border-color);
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10em;
  align-items: center;
  justify-content: center;
  font-weight: 400;
`;
