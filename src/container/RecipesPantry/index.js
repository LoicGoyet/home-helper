import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RecipesList from '../../components/RecipesList';
import Checkbox from '../../components/Checkbox';
import { toggleAvailabilityInPantry } from '../../ducks/recipes';

const mapStateToProps = state => ({
  available: state.recipes.pantry.filter(recipe => !recipe.done),
  eaten: state.recipes.pantry.filter(recipe => recipe.done),
});

const mapDispatchToProps = dispatch => ({
  toggleAvailabilityInPantry: bindActionCreators(toggleAvailabilityInPantry, dispatch),
});

const recipeList = (collection, onChange, done = false) => {
  const recipes = collection.map(({ recipe, id }) => {
    const { title, tags, ingredients } = recipe;

    return {
      title,
      tags,
      id,
      mainBtn: (
        <Checkbox
          title={`mark ${title} as${done ? 'not ' : ' '} eaten`}
          defaultChecked={done}
          onChange={() => {
            onChange(id);
          }}
        />
      ),
      ingredients,
    };
  });

  return <RecipesList recipes={recipes} isDone={done} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => (
  <React.Fragment>
    {recipeList(props.available, props.toggleAvailabilityInPantry)}
    {recipeList(props.eaten, props.toggleAvailabilityInPantry, true)}
  </React.Fragment>
));
