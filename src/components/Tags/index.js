import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tags = ({ items, ...props }) => (
  <Wrapper {...props}>{items.map(item => <Item key={item.id}>{item.title}</Item>)}</Wrapper>
);

Tags.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tags;

const Wrapper = styled.div`
  display: flex;
  font-size: 0.9em;
  letter-spacing: 0.01em;
  font-weight: 300;
`;

const Item = styled.span`
  display: inline-flex;

  & + &::before {
    content: '•';
    margin: 0 0.5em;
  }
`;
