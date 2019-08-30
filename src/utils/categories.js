import * as R from 'ramda';

export const sortCategoriesByAlphabetical = categories => {
  const sortedCategoriesAllIds = R.sort((categoryIdA, categoryIdB) => {
    const categoryA = R.path(['byId', categoryIdA], categories);
    const categoryB = R.path(['byId', categoryIdB], categories);
    return categoryA.title < categoryB.title;
  }, categories.allIds);

  return {
    ...categories,
    allIds: sortedCategoriesAllIds,
  };
};
