import React from 'react';
import { connect } from 'react-redux';

import RecipesList from '../../components/RecipesList';
import Button from '../../components/Button';
import { addInPantry } from '../../ducks/recipes';

const mapStateToProps = state => ({
  collection: state.recipes.collection.filter(collection => collection !== null),
});

const mapDispatchToProps = dispatch => ({
  addInPantry: id => dispatch(addInPantry(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const recipes = props.collection.map(({ title, tags, id, ingredients, link }) => ({
    title,
    tags,
    ingredients,
    mainBtn: (
      <Button
        onClick={e => {
          console.log(id);
          e.stopPropagation();
          props.addInPantry(id);
        }}
        block
      >
        Ajouter
      </Button>
    ),
    actionRow: link ? (
      <React.Fragment>
        <Button exthref={link}>Recette</Button>
      </React.Fragment>
    ) : null,
  }));

  return <RecipesList recipes={recipes} />;
});
