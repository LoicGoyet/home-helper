import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Plan, { planProp } from 'components/Plan';

const Card = ({ children, className, onClick, style }) => {
  const themeVars = {
    ...style,
  };

  return (
    <Wrapper className={className} style={themeVars} onClick={onClick}>
      <Plan>{children}</Plan>
    </Wrapper>
  );
};

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

export default React.memo(Card);

const Wrapper = styled.article`
  background-color: var(--bg-color);
  background-color: ${planProp('backgroundColor')};
  box-shadow: ${planProp('boxShadow')};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space};
  border-radius: ${props => props.theme.radius};
`;
