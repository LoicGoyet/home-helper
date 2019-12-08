import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormGroup from 'components/FormGroup';
import Input from 'components/Input';
import Button from 'components/Button';
import IngredientField from 'containers/recipes/IngredientField';
import COLORS, { THEMES } from 'style/colors';

const defaultIngredient = {
  productTitle: '',
  categoryTitle: '',
  quantity: 0,
  unitTitle: '',
  id: 0,
};

const defaultState = {
  title: '',
  link: '',
  ingredients: [defaultIngredient],
};

const getNextIngredientId = ingredients => {
  const higherId = ingredients.reduce((higher, ingredient) => (ingredient.id <= higher ? higher : ingredient.id), 0);

  return higherId + 1;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset': {
      return {
        ...defaultState,
      };
    }

    case 'update_field': {
      return {
        ...state,
        [action.field]: action.value,
      };
    }

    case 'update_ingredient': {
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient, index) => {
          if (index !== action.index) return ingredient;
          return action.values;
        }),
      };
    }

    case 'remove_ingredient': {
      return {
        ...state,
        ingredients: state.ingredients.filter((ingredient, index) => index !== action.index),
      };
    }

    case 'add_ingredient': {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          {
            ...defaultIngredient,
            id: getNextIngredientId(state.ingredients),
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
};

const RecipeForm = ({ onSubmit, defaultValues }) => {
  const [state, dispatch] = useReducer(reducer, defaultValues);

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    dispatch({
      type: 'reset',
    });
  };

  const onInputChange = field => e => {
    dispatch({
      type: 'update_field',
      field,
      value: e.target.value,
    });
  };

  const onIngredientChange = index => values => {
    dispatch({
      type: 'update_ingredient',
      index,
      values,
    });
  };

  const onIngredientRemove = index => e => {
    e.preventDefault();
    dispatch({
      type: 'remove_ingredient',
      index,
    });
  };

  const onIngredientAdd = e => {
    e.preventDefault();
    dispatch({
      type: 'add_ingredient',
    });
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <FullFormGroup label="Nom">
        <Input onChange={onInputChange('title')} value={state.title} required />
      </FullFormGroup>

      <FullFormGroup label="Lien vers la recette">
        <Input onChange={onInputChange('link')} value={state.link} />
      </FullFormGroup>

      {state.ingredients.map((ingredient, index) => (
        <IngredientField
          key={`ingredient-${ingredient.id || index}`}
          onChange={onIngredientChange(index)}
          values={ingredient}
        >
          <Button type="button" onClick={onIngredientRemove(index)} color={THEMES.danger}>
            Supprimer
          </Button>
        </IngredientField>
      ))}

      <IngredientPlaceholder>
        <Button onClick={onIngredientAdd}>Ajouter un ingrédient</Button>
      </IngredientPlaceholder>

      <ActionBar>
        <Button type="submit" isBlock color={COLORS.green}>
          Enregistrer
        </Button>
      </ActionBar>
    </Form>
  );
};

RecipeForm.propTypes = {
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.shape({
    title: PropTypes.string,
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

RecipeForm.defaultProps = {
  onSubmit: () => undefined,
  defaultValues: defaultState,
};

export default RecipeForm;

const Form = styled.form`
  display: grid;
  grid-gap: ${props => props.theme.space};
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  > * {
    margin: 0;
  }
`;

const FullFormGroup = styled(FormGroup)`
  @media (min-width: 600px) {
    grid-column: span 2;
  }
`;

const IngredientPlaceholder = styled.div`
  border-radius: ${props => props.theme.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.space};
`;

const ActionBar = styled.div`
  text-align: right;

  @media (min-width: 600px) {
    grid-column: span 2;
  }
`;
