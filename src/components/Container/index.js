import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
};

Container.defaultProps = {
  children: undefined,
};

export default React.memo(Container);

const Wrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
`;
