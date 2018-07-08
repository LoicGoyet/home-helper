import { connect } from 'react-redux';

import RecipesList from '../../components/RecipesList';

const mapStateToProps = state => ({
  recipes: state.recipes.collection.map(({ title, tags, ...recipe }) => ({
    title,
    tags,
  })),
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
