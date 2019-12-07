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

export const getPantryCounts = tags => pantry =>
  tags.allIds.reduce(
    (acc, tagId) => {
      const label = tags.byId[tagId].title;
      const value = pantry.allIds.filter(pantryId => {
        const pantryItem = pantry.byId[pantryId];
        return pantryItem.tags.indexOf(tagId) > -1 && pantryItem.available;
      }).length;

      return [
        ...acc,
        {
          label,
          value,
        },
      ];
    },
    [
      {
        label: 'total',
        value: pantry.allIds.filter(pantryId => pantry.byId[pantryId].available).length,
        isTotal: true,
      },
    ]
  );
