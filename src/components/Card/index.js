import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../../style/colors';

const Card = ({ children, className, onClick, style }) => (
  <Wrapper className={className} style={getThemeVars(style)} onClick={onClick}>
    {children}
  </Wrapper>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

Card.defaultProps = {
  children: undefined,
  className: undefined,
  onClick: undefined,
  style: {},
};

export default Card;

const getThemeVars = overwrites => ({
  '--bg-color': COLORS.white,
  ...overwrites,
});

const Wrapper = styled.article`
  --color: ${COLORS.violet};
  background-color: var(--bg-color);
  color: var(--color);
  padding: 1rem;
`;
