import * as R from 'ramda';

export const filterPantryByAvailable = pantry => {
  const filteredPantryByAvailable = R.filter(recipe => recipe.available, pantry.byId);

  return {
    byId: filteredPantryByAvailable,
    allIds: Object.keys(filteredPantryByAvailable),
  };
};

export const filterPantryByUnavailable = pantry => {
  const filteredPantryByAvailable = R.filter(recipe => !recipe.available, pantry.byId);

  return {
    byId: filteredPantryByAvailable,
    allIds: Object.keys(filteredPantryByAvailable),
  };
};

export const sortPantryByDateDesc = pantry => {
  const sortedTasksAllIds = R.sort((recipeIdA, recipeIdB) => {
    const recipeA = R.path(['byId', recipeIdA], pantry);
    const recipeB = R.path(['byId', recipeIdB], pantry);
    return recipeB.updatedAt - recipeA.updatedAt;
  }, pantry.allIds);

  return {
    ...pantry,
    allIds: sortedTasksAllIds,
  };
};

export const unfoldPantry = (products, units) => pantry => {
  const unfoldedPantryById = R.map(recipe => {
    const ingredients = recipe.ingredients.map(ingredient => ({
      ...ingredient,
      product: products.byId[ingredient.product],
      unit: units.byId[ingredient.unit],
    }));

    return {
      ...recipe,
      ingredients,
    };
  }, pantry.byId);

  return {
    ...pantry,
    byId: unfoldedPantryById,
  };
};
