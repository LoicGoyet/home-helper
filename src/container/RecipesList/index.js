import React from 'react';
import { connect } from 'react-redux';

import RecipesList from '../../components/RecipesList';
import Button from '../../components/Button';

const mapStateToProps = state => ({
  recipes: state.recipes.collection.map(({ title, tags, id, ingredients }) => ({
    title,
    tags,
    mainBtn: (
      <Button onClick={e => e.stopPropagation()} block>
        Add
      </Button>
    ),
    ingredients: ingredients.map(ingredient => ({
      title: ingredient.title,
      quantity: {
        number: ingredient.quantity,
        unit: ingredient.quantityUnit,
      },
    })),
  })),
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
