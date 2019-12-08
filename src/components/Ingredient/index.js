import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Checkbox from 'components/Checkbox';
import COLORS from 'style/colors';

const Ingredient = ({ name, quantity, unit, color, isChecked, onChange, ...props }) => (
  <Wrapper {...props} isDiscreet={isChecked}>
    {isChecked !== undefined && <Check isChecked={isChecked} color={color} onChange={onChange} />}

    <Info>
      <Name>{name}</Name>
      <Quantity>
        {quantity} {unit}
      </Quantity>
    </Info>
  </Wrapper>
);

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  color: PropTypes.string,
  onChange: PropTypes.func,
};

Ingredient.defaultProps = {
  isChecked: undefined,
  color: COLORS.white,
  onChange: () => undefined,
};

export default React.memo(Ingredient);

const Wrapper = styled.article`
  display: flex;
  opacity: ${props => props.isDiscreet && 0.3};
  align-items: flex-start;
`;

const Check = styled(Checkbox)`
  margin-right: 1rem;
  flex-shrink: 0;
`;

const Info = styled.div`
  flex-grow: 1;
  min-width: 0;
`;

const Name = styled.h5`
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

const Quantity = styled.h6`
  margin: 0.25rem 0 0;
  color: ${props => props.theme.colors.lightgray};
  font-weight: 400;
`;
