import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../FormGroup';
import IngredientForm from '../IngredientForm';
import Button from '../Button';
import COLORS from '../../style/colors';

class AddRecipeInCollection extends React.Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    units: PropTypes.object,
    addInCollection: PropTypes.func.isRequired,
  };

  static defaultProps = {
    tasks: [],
    units: [],
  };

  constructor(props) {
    super(props);
    this.titleInput = React.createRef();

    this.getIngredientValues = this.getIngredientValues.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    ingredients: [{}],
  };

  onSubmit(event) {
    event.preventDefault();
    const title = this.titleInput.current.value;
    const { ingredients } = this.state;

    event.target.reset();
    this.setState({ ingredients: [{}] });

    return this.props.addInCollection(title, ingredients);
  }

  getIngredientValues(index, values) {
    const { ingredients } = this.state;
    ingredients[index] = values;
    this.setState({
      ingredients,
    });
  }

  addIngredient() {
    this.setState({
      ingredients: [...this.state.ingredients, {}],
    });
  }

  render() {
    const { tasks, units } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup innerRef={this.titleInput} label="Nom" id="add-in-collection-id" />
        {this.state.ingredients.map((ingredient, index) => (
          <IngredientForm
            key={`ingredient-${index}`}
            tasks={tasks}
            units={units}
            onChange={values => this.getIngredientValues(index, values)}
          />
        ))}

        <Button onClick={this.addIngredient} block>
          Add ingredient
        </Button>

        <Button type="submit" block color={COLORS.green}>
          Submit
        </Button>
      </form>
    );
  }
}

export default AddRecipeInCollection;
