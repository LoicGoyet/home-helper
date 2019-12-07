import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import * as pantryDuck from 'ducks/recipes/pantry';

const PantryCount = props => {
  const length = useSelector(pantryDuck.selectors.getAvailablePantryLength);
  if (!length) return null;
  return <Wrapper {...props}>{length}</Wrapper>;
};

export default PantryCount;

const Wrapper = styled.span`
  display: inline-flex;
  background-color: ${props => props.theme.colors.red};
  padding: 0.15em 0.33515625em;
  font-size: 1em;
  justify-content: center;
  align-items: center;
  line-height: 1;
  border-radius: 100px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`;
