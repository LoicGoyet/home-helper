import { connect } from 'react-redux';

import PantryCount from '../../components/PantryCount';

const mapStateToProps = state => {
  const pantry = state.recipes.pantry || [];
  return {
    tags: pantry.filter(recipe => !recipe.done).reduce((count, item) => {
      const tags = { ...count };
      return item.recipe.tags.reduce(
        (acc, tag) => ({
          ...acc,
          [tag]: (acc[tag] || 0) + 1,
        }),
        tags
      );
    }, {}),
    pantryLength: pantry.filter(recipe => !recipe.done).length,
  };
};

export default connect(mapStateToProps)(PantryCount);
