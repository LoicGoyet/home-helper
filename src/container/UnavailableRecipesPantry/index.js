import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RecipesPantry from 'components/RecipesPantry';
import { togglePantryEntry } from 'ducks/recipes/pantry';

const mapStateToProps = state => {
  const { pantry, tags } = state.recipes;
  const { products, units } = state.todos;

  const allIds = pantry.allIds
    .filter(id => !pantry.byId[id].available)
    .sort((a, b) => pantry.byId[a].updatedAt < pantry.byId[b].updatedAt);

  return {
    pantry: {
      ...pantry,
      allIds,
      byId: allIds.reduce(
        (acc, id) => ({
          ...acc,
          [id]: {
            ...pantry.byId[id],
            tags: pantry.byId[id].tags.map(tagId => tags.byId[tagId]),
            ingredients: pantry.byId[id].ingredients.map(ingredient => ({
              ...ingredient,
              product: products.byId[ingredient.product],
              unit: units.byId[ingredient.unit],
            })),
          },
        }),
        {}
      ),
    },
  };
};

const mapDispatchToProps = dispatch => ({
  toggleItem: bindActionCreators(togglePantryEntry, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesPantry);
