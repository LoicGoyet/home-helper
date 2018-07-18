import { connect } from 'react-redux';

import PantryCount from '../../components/PantryCount';

const mapStateToProps = state => ({
  tags: state.recipes.pantry.filter(recipe => !recipe.done).reduce((count, item) => {
    const tags = { ...count };
    // console.log(recipe);
    return item.recipe.tags.reduce(
      (acc, tag) => ({
        ...acc,
        [tag]: (acc[tag] || 0) + 1,
      }),
      tags
    );
  }, {}),
  pantryLength: state.recipes.pantry.filter(recipe => !recipe.done).length,
});

export default connect(mapStateToProps)(PantryCount);
