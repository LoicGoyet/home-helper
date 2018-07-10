import React from 'react';
import { connect } from 'react-redux';

import RecipesList from '../../components/RecipesList';
import Button from '../../components/Button';
import { addInPantry } from '../../ducks/recipes';

const mapStateToProps = state => ({
  collection: state.recipes.collection,
});

const mapDispatchToProps = dispatch => ({
  addInPantry: id => dispatch(addInPantry(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const recipes = props.collection.map(({ title, tags, id, ingredients }) => ({
    title,
    tags,
    mainBtn: (
      <Button
        onClick={e => {
          e.stopPropagation();
          props.addInPantry(id);
        }}
        block
      >
        Add
      </Button>
    ),
    ingredients,
  }));

  return <RecipesList recipes={recipes} />;
});
