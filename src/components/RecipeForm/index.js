import React from 'react';
import PropTypes from 'prop-types';
import { TiPlus, TiTrash } from 'react-icons/lib/ti';

import FormGroup from 'components/FormGroup';
import IngredientForm from 'components/IngredientForm';
import Button from 'components/Button';
import Input from 'components/Input';
import COLORS, { THEMES } from 'style/colors';

const defaultIngredient = {
  productTitle: '',
  categoryTitle: '',
  quantity: 0,
  unitTitle: '',
  id: 0,
};

const defaultValues = {
  title: '',
  tags: [],
  link: '',
  ingredients: [defaultIngredient],
};

class RecipeForm extends React.Component {
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
          id: PropTypes.number,
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
    this.ingredientNextId = 1;
  }

  state = {
    ingredients: [defaultIngredient],
  };

  componentDidMount = () => {
    this.props.defaultValues.ingredients.map((ingredient, index) => this.getIngredientValues(index, ingredient, true));
  };

  onSubmit = event => {
    event.preventDefault();
    const { ingredients, title, tags } = this.state;
    this.props.onSubmit(title, tags, ingredients, this.link);
    return this.reset();
  };

  onInputChange = (event, field) => {
    const { value } = event.target;
    const formatedValue = field === 'tags' ? this.convertStrToTags(value) : value;

    this.setState({
      [field]: formatedValue,
    });
  };

  get link() {
    return this.state.link !== '' ? this.state.link : null;
  }

  getIngredientValues = (index, values, init = false) => {
    const { ingredients } = this.state;

    ingredients[index] = {
      ...values,
    };

    if (init) {
      ingredients[index] = {
        ...ingredients[index],
        id: this.ingredientNextId,
      };

      this.ingredientNextId += 1;
    }

    this.setState({
      ingredients,
    });
  };

  convertStrToTags = str => str.split(',').map(item => item.trim());

  reset = () => {
    this.setState({
      ...defaultValues,
    });
  };

  addIngredient = event => {
    event.preventDefault();
    event.currentTarget.blur();
    this.setState({
      ingredients: [
        ...this.state.ingredients,
        {
          ...defaultIngredient,
          id: this.ingredientNextId,
        },
      ],
    });

    this.ingredientNextId += 1;
  };

  removeIngredient = (event, id) => {
    event.preventDefault();

    this.setState({
      ingredients: this.state.ingredients.filter(i => i.id !== id),
    });
  };

  render = () => (
    <form onSubmit={this.onSubmit}>
      <FormGroup label="Nom">
        <Input onChange={e => this.onInputChange(e, 'title')} value={this.state.title} required />
      </FormGroup>

      <FormGroup label="Tags" help="Séparez les tags par une virgule">
        <Input onChange={e => this.onInputChange(e, 'tags')} value={this.state.tags} />
      </FormGroup>

      <FormGroup label="Lien vers la recette">
        <Input onChange={e => this.onInputChange(e, 'link')} value={this.state.link} />
      </FormGroup>

      {this.state.ingredients.map((ingredient, index) => {
        const isLast = index === this.state.ingredients.length - 1;
        return (
          <IngredientForm
            key={`ingredient-${ingredient.id || index}`}
            units={this.props.units}
            products={this.props.products}
            categories={this.props.categories}
            onChange={values => this.getIngredientValues(index, values)}
            defaultValues={ingredient}
            button={{
              onClick: isLast ? this.addIngredient : event => this.removeIngredient(event, ingredient.id),
              color: THEMES[isLast ? 'success' : 'danger'],
              icon: isLast ? TiPlus : TiTrash,
            }}
          />
        );
      })}

      <div style={{ textAlign: 'right' }}>
        <Button type="submit" isBlock color={COLORS.green}>
          Enregistrer
        </Button>
      </div>
    </form>
  );
}

export default RecipeForm;
