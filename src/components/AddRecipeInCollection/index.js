import React from 'react';
import PropTypes from 'prop-types';
import { TiPlus, TiTrash } from 'react-icons/lib/ti';

import FormGroup from '../FormGroup';
import IngredientForm from '../IngredientForm';
import Button from '../Button';
import COLORS, { THEMES } from '../../style/colors';

const defaultIngredient = {
  product: '',
  category: '',
  quantity: 0,
  unit: '',
};

const defaultValues = {
  title: '',
  tags: [],
  link: '',
  ingredients: [defaultIngredient],
};

class AddRecipeInCollection extends React.Component {
  static propTypes = {
    products: PropTypes.object.isRequired,
    units: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    defaultValues: PropTypes.shape({
      title: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      link: PropTypes.string,
      ingredients: PropTypes.arrayOf(
        PropTypes.shape({
          product: PropTypes.string,
          category: PropTypes.string,
          quantity: PropTypes.number,
          unit: PropTypes.string,
        })
      ),
    }),
  };

  static defaultProps = {
    defaultValues,
  };

  constructor(props) {
    super(props);

    this.state = this.props.defaultValues;
  }

  state = {
    ingredients: [defaultIngredient],
  };

  componentDidMount = () => {
    this.props.defaultValues.ingredients.map((ingredient, index) => this.getIngredientValues(index, ingredient));
  };

  onSubmit = event => {
    event.preventDefault();
    const { ingredients, title, tags } = this.state;
    this.props.onSubmit(title, tags, ingredients, this.link);
    return this.reset();
  };

  onInputChange = (event, field) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  get link() {
    return this.state.link !== '' ? this.state.link : null;
  }

  getIngredientValues = (index, values) => {
    const { ingredients } = this.state;
    ingredients[index] = values;
    this.setState({
      ingredients,
    });
  };

  reset = () => {
    this.setState({
      ...defaultValues,
    });
  };

  addIngredient = event => {
    event.preventDefault();
    event.currentTarget.blur();
    this.setState({
      ingredients: [...this.state.ingredients, defaultIngredient],
    });
  };

  removeIngredient = (event, index) => {
    event.preventDefault();

    console.log(this.state.ingredients.splice(index, 1));

    this.setState({
      ingredients: this.state.ingredients.splice(index, 1),
    });
  };

  render = () => (
    <form onSubmit={this.onSubmit}>
      <FormGroup label="Nom" onChange={e => this.onInputChange(e, 'title')} value={this.state.title} required />

      <FormGroup
        label="Tags"
        onChange={e => this.onInputChange(e, 'tags')}
        value={this.state.tags}
        help="Séparez les tags par une virgule"
      />

      <FormGroup label="Lien vers la recette" onChange={e => this.onInputChange(e, 'link')} value={this.state.link} />

      {this.state.ingredients.map((ingredient, index) => {
        const isLast = index === this.state.ingredients.length - 1;
        return (
          <IngredientForm
            key={`ingredient-${ingredient.product}`}
            units={this.props.units}
            products={this.props.products}
            categories={this.props.categories}
            onChange={values => this.getIngredientValues(index, values)}
            defaultValues={ingredient}
            button={{
              onClick: isLast ? this.addIngredient : event => this.removeIngredient(event, index),
              color: THEMES[isLast ? 'success' : 'danger'],
              children: () => (isLast ? <TiPlus size={20} /> : <TiTrash size={20} />),
            }}
          />
        );
      })}

      <div style={{ textAlign: 'right' }}>
        <Button type="submit" block color={COLORS.green}>
          Enregistrer
        </Button>
      </div>
    </form>
  );
}

export default AddRecipeInCollection;
