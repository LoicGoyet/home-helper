import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = ({ children, maxWidth, ...props }) => (
  <Wrapper {...props} maxWidth={maxWidth}>
    {children}
  </Wrapper>
);

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  maxWidth: PropTypes.string,
};

Container.defaultProps = {
  children: undefined,
  maxWidth: '60rem',
};

export default React.memo(Container);

const Wrapper = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth};
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
`;
