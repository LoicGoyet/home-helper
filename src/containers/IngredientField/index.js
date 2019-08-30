import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FormGroup from 'components/FormGroup';
import Input from 'components/Input';
import Card from 'components/Card';
import { useAutoCategory, useAutoQuantityUnit } from 'containers/hooks';
import {
  TODOS_CATEGORIES_SUGGESTIONS,
  TODOS_PRODUCTS_SUGGESTIONS,
  TODOS_UNITS_SUGGESTIONS,
} from 'containers/SuggestionsLists';

const IngredientField = ({ values, onChange, children, ...props }) => {
  const getAutoCategory = useAutoCategory();
  const getAutoQuantityUnit = useAutoQuantityUnit();

  const onInputChange = field => e => {
    // try to get auto categoryTitle and quantityUnit if productTitle field updates
    const categoryTitle = field === 'productTitle' && getAutoCategory(e.target.value);
    const unitTitle = field === 'productTitle' && getAutoQuantityUnit(e.target.value);

    return onChange({
      ...values,
      [field]: e.target.value,
      ...(!!categoryTitle && { categoryTitle }),
      ...(!!unitTitle && { unitTitle }),
    });
  };

  return (
    <Wrapper role="group" {...props}>
      <Grid>
        <FormGroup label="Produit">
          <Input
            placeholder="nom du produit"
            onChange={onInputChange('productTitle')}
            value={values.productTitle}
            list={TODOS_PRODUCTS_SUGGESTIONS}
            required
          />
        </FormGroup>

        <FormGroup label="Catégorie">
          <Input
            id="category"
            placeholder="categorie"
            onChange={onInputChange('categoryTitle')}
            value={values.categoryTitle}
            list={TODOS_CATEGORIES_SUGGESTIONS}
            required
          />
        </FormGroup>

        <FormGroup label="Quantité">
          <Input
            id="quantity"
            type="number"
            min="0"
            step="any"
            onChange={onInputChange('quantity')}
            value={values.quantity}
            required
          />
        </FormGroup>

        <FormGroup label="Unité">
          <Input
            id="unit"
            placeholder="unité"
            onChange={onInputChange('unitTitle')}
            value={values.unitTitle}
            list={TODOS_UNITS_SUGGESTIONS}
            required
          />
        </FormGroup>
      </Grid>

      {children}
    </Wrapper>
  );
};

IngredientField.propTypes = {
  hasSubmit: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.any,
};

IngredientField.defaultProps = {
  hasSubmit: false,
  onChange: () => undefined,
  children: undefined,
};

export default IngredientField;

const Wrapper = styled(Card)`
  margin-bottom: ${props => props.theme.space};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${props => props.theme.space};
  margin: 0 0 ${props => props.theme.space};
  padding: 0;
  border: 0;

  > * {
    margin-bottom: 0;
  }
`;
