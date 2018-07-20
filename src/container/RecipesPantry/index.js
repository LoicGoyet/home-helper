import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RecipesList from '../../components/RecipesList';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import { toggleAvailabilityInPantry } from '../../ducks/recipes';

const mapStateToProps = state => {
  const pantry = state.recipes.pantry || [];
  return {
    available: pantry.filter(recipe => !recipe.done),
    eaten: pantry.filter(recipe => recipe.done).slice(0, 5),
  };
};

const mapDispatchToProps = dispatch => ({
  toggleAvailabilityInPantry: bindActionCreators(toggleAvailabilityInPantry, dispatch),
});

const recipeList = (collection, onChange, done = false) => {
  const recipes = collection.map(({ recipe, id }) => {
    const { title, tags, ingredients, link } = recipe;

    return {
      title,
      tags,
      id,
      ingredients,
      mainBtn: (
        <Checkbox
          title={`mark ${title} as${done ? 'not ' : ' '} eaten`}
          defaultChecked={done}
          onChange={() => {
            onChange(id);
          }}
        />
      ),

      actionRow: link ? (
        <React.Fragment>
          <Button exthref={link}>Recette</Button>
        </React.Fragment>
      ) : null,
    };
  });

  return <RecipesList recipes={recipes} isDone={done} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ available, eaten, ...props }) => (
  <div style={{ marginBottom: '-1rem' }}>
    {available.length > 0 && recipeList(available, props.toggleAvailabilityInPantry)}
    {eaten.length > 0 && recipeList(eaten, props.toggleAvailabilityInPantry, true)}
  </div>
));
