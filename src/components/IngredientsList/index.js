import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'components/Card';

const IngredientsList = ({ ingredients, className }) => (
  <Card className={className}>
    <List>
      {ingredients.map(({ product, quantity, unit }) => (
        <Item key={`${product.title} / ${quantity}`}>
          <Title>{product.title}</Title>
          <Quantity>
            {quantity} {unit.title}
          </Quantity>
        </Item>
      ))}
    </List>
  </Card>
);

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

IngredientsList.defaultProps = {
  className: undefined,
};

export default IngredientsList;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.4em;
  }
`;

const Title = styled.span`
  margin-right: 0.5em;
`;

const Quantity = styled.span`
  font-size: 0.8em;
  font-style: italic;
`;
