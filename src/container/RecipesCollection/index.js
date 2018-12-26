import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RecipesCollection from '../../components/RecipesCollection';
import { addPantryEntry } from '../../ducks/recipes/pantry';

const mapStateToProps = state => {
  const { collection, tags } = state.recipes;
  const { products, units } = state.todos;

  console.log({
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
  });

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
  addItem: bindActionCreators(addPantryEntry, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesCollection);
