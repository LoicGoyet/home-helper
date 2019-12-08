import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'components/Card';
import Ingredient from 'components/Ingredient';

const IngredientsList = ({ ingredients, className }) => (
  <Wrapper className={className}>
    {ingredients.map(({ product, quantity, unit }) => (
      <Ingredient key={`${product.title} / ${quantity}`} name={product.title} quantity={quantity} unit={unit.title} />
    ))}
  </Wrapper>
);

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

IngredientsList.defaultProps = {
  className: undefined,
};

export default IngredientsList;

const Wrapper = styled(Card)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
`;
