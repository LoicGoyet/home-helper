import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormGroup from '../FormGroup';
import {
  TODOS_CATEGORIES_SUGGESTIONS,
  TODOS_PRODUCTS_SUGGESTIONS,
  TODOS_UNITS_SUGGESTIONS,
} from '../../container/SuggestionsLists';

class IngredientForm extends React.Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    units: PropTypes.object,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    tasks: [],
    units: [],
    onChange: undefined,
  };

  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.categoryInput = React.createRef();
    this.quantityInput = React.createRef();
    this.quantityUnitInput = React.createRef();

    this.autoFillInputs = this.autoFillInputs.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    return this.props.onChange({
      title: this.titleInput.current.value,
      category: this.categoryInput.current.value,
      quantity: parseInt(this.quantityInput.current.value),
      quantityUnit: this.quantityUnitInput.current.value,
    });
  }

  getAutoQuantityUnit() {
    const { value } = this.titleInput.current;
    if (!this.props.units[value]) return false;
    this.quantityUnitInput.current.value = this.props.units[value];
  }

  getAutoCategory() {
    const { value } = this.titleInput.current;
    const taskWtSameTitle = this.props.tasks.find(({ title }) => title === value);
    if (!taskWtSameTitle) return true;

    this.categoryInput.current.value = taskWtSameTitle.category;
    return false;
  }

  autoFillInputs() {
    this.getAutoCategory();
    this.getAutoQuantityUnit();
    return this.onChange();
  }

  render() {
    return (
      <Row role="group">
        <TitleCol>
          <FormGroup
            innerRef={this.titleInput}
            id="title"
            label="Title"
            list={TODOS_PRODUCTS_SUGGESTIONS}
            placeholder="nom du produit"
            onChange={this.autoFillInputs}
            required
          />
        </TitleCol>

        <CategoryCol>
          <FormGroup
            innerRef={this.categoryInput}
            id="category"
            label="Category"
            list={TODOS_CATEGORIES_SUGGESTIONS}
            placeholder="categorie"
            onChange={this.onChange}
            required
          />
        </CategoryCol>

        <QuantityCol>
          <QuantityInputCol>
            <FormGroup
              innerRef={this.quantityInput}
              id="quantity"
              label="Quantity"
              type="number"
              min="1"
              onChange={this.onChange}
              required
            />
          </QuantityInputCol>

          <QuantityUnitInputCol>
            <FormGroup
              innerRef={this.quantityUnitInput}
              id="quantity-unit"
              list={TODOS_UNITS_SUGGESTIONS}
              label="Quantity Unit"
              placeholder="unité"
              onChange={this.onChange}
              required
            />
          </QuantityUnitInputCol>
        </QuantityCol>
      </Row>
    );
  }
}

export default IngredientForm;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;

  > * {
    flex-grow: 1;
    flex-shrink: 1;
    margin-bottom: 1rem;

    > * {
      margin-bottom: 0;
    }
  }
`;

const TitleCol = styled.div`
  flex-basis: 12rem;
`;

const CategoryCol = styled.div`
  flex-basis: 12rem;
`;

const QuantityCol = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-bottom: 0;

  > * {
    flex-grow: 1;
    flex-shrink: 1;
    margin-bottom: 1rem;
    flex-basis: 100px;

    > * {
      margin-bottom: 0;
    }
  }
`;

const QuantityInputCol = styled.div`
  flex-basis: 4rem;
  flex-grow: auto;
`;

const QuantityUnitInputCol = styled.div`
  flex-basis: 12rem;
`;
