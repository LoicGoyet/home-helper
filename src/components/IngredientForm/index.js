import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled from 'styled-components';
import { path } from 'ramda';
import { normalizeStr } from '../../utils/strings';

import FormGroup from '../FormGroup';
import Button from '../Button';
import {
  TODOS_CATEGORIES_SUGGESTIONS,
  TODOS_PRODUCTS_SUGGESTIONS,
  TODOS_UNITS_SUGGESTIONS,
} from '../../container/SuggestionsLists';

class IngredientForm extends React.Component {
  static propTypes = {
    products: PropTypes.object.isRequired,
    units: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    defaultValues: PropTypes.shape({
      productTitle: PropTypes.string,
      categoryTitle: PropTypes.string,
      quantity: PropTypes.number,
      unitTitle: PropTypes.string,
    }),
    button: PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      color: ExtraPropTypes.color.isRequired /* eslint-disable-line react/no-typos, react/no-unused-prop-types */,
      icon: PropTypes.func.isRequired,
    }),
  };

  static defaultProps = {
    onChange: () => undefined,
    defaultValues: {
      productTitle: '',
      categoryTitle: '',
      quantity: 0,
      unitTitle: '',
    },
    button: undefined,
  };

  constructor(props) {
    super(props);
    this.state = this.props.defaultValues;
  }

  state = {
    productTitle: '',
    categoryTitle: '',
    quantity: 0,
    unitTitle: '',
  };

  componentDidUpdate = prevProps => {
    if (prevProps.defaultValues !== this.props.defaultValues) {
      this.setState({
        ...this.props.defaultValues,
      });
    }
  };

  onChange = () => this.props.onChange(this.state);

  getStoredProductId = value => {
    const { products } = this.props;
    return products.allIds.find(id => normalizeStr(products.byId[id].title) === normalizeStr(value));
  };

  getAutoCategory() {
    const storedProductId = this.getStoredProductId(this.state.productTitle);
    if (storedProductId === undefined) return;

    this.setState(
      {
        categoryTitle: this.props.categories.byId[this.props.products.byId[storedProductId].category].title,
      },
      this.onChange
    );
  }

  getAutoQuantityUnit() {
    const storedProductId = this.getStoredProductId(this.state.productTitle);
    if (storedProductId === undefined) return;

    this.setState(
      {
        unitTitle: this.props.units.byId[this.props.products.byId[storedProductId].defaultUnit].title,
      },
      this.onChange
    );
  }

  handleProductChange = e => {
    this.setState({ productTitle: e.target.value }, () => {
      this.getAutoCategory();
      this.getAutoQuantityUnit();
      return this.onChange();
    });
  };

  handleCategoryChange = e => {
    this.setState({ categoryTitle: e.target.value }, this.onChange);
  };

  handleQuantityChange = e => {
    const { value } = e.target;
    const quantity = value === '' ? 0 : parseInt(value);
    this.setState({ quantity }, this.onChange);
  };

  handleUnitChange = e => {
    this.setState({ unitTitle: e.target.value }, this.onChange);
  };

  render() {
    const ButtonIcon = path(['button', 'icon'], this.props);

    return (
      <Row role="group">
        <TitleCol>
          <FormGroup
            id="product"
            label="Produit"
            list={TODOS_PRODUCTS_SUGGESTIONS}
            placeholder="nom du produit"
            onChange={this.handleProductChange}
            value={this.state.productTitle}
            required
          />
        </TitleCol>

        <CategoryCol>
          <FormGroup
            id="category"
            label="Catégorie"
            list={TODOS_CATEGORIES_SUGGESTIONS}
            placeholder="categorie"
            onChange={this.handleCategoryChange}
            value={this.state.categoryTitle}
            required
          />
        </CategoryCol>

        <QuantityCol>
          <QuantityInputCol>
            <FormGroup
              id="quantity"
              label="Quantité"
              type="number"
              min="0"
              step="any"
              onChange={this.handleQuantityChange}
              value={this.state.quantity}
              required
            />
          </QuantityInputCol>

          <QuantityUnitInputCol>
            <FormGroup
              id="unit"
              list={TODOS_UNITS_SUGGESTIONS}
              label="Unité"
              placeholder="unité"
              value={this.state.unitTitle}
              onChange={this.handleUnitChange}
              required
            />
          </QuantityUnitInputCol>

          {this.props.button && (
            <ButtonCol>
              <Button square="42px" onClick={this.props.button.onClick} color={this.props.button.color} isBlock>
                <ButtonIcon size={20} />
              </Button>
            </ButtonCol>
          )}
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

const ButtonCol = styled.div`
  flex-shrink: 0;
  flex-grow: initial;
  flex-basis: initial;
`;
