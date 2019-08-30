import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RecipesCollection from 'containers/recipes/RecipesCollection/component';
import * as pantryDuck from 'ducks/recipes/pantry';

const mapStateToProps = state => {
  const { collection, tags } = state.recipes;
  const { products, units } = state.todos;

  return {
    collection: {
      ...collection,
      byId: collection.allIds.reduce(
        (acc, id) => ({
          ...acc,
          [id]: {
            ...collection.byId[id],
            tags: collection.byId[id].tags.map(tagId => tags.byId[tagId]),
            ingredients: collection.byId[id].ingredients.map(ingredient => ({
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
  addItem: bindActionCreators(pantryDuck.addPantryEntry, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesCollection);
