import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tags = ({ items, ...props }) => {
  if (Array.isArray(items)) {
    return <Wrapper {...props}>{items.map(item => <Item key={item}>{item}</Item>)}</Wrapper>;
  }

  return (
    <Wrapper {...props}>
      {Object.keys(items).map(key => (
        <Item key={key}>
          <strong>{key}</strong>: {items[key]}
        </Item>
      ))}
    </Wrapper>
  );
};

Tags.propTypes = {
  items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.object]).isRequired,
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
