import * as R from 'ramda';

export const sortProductsByAlphabetical = products => {
  const sortedProductsAllIds = R.sort((productIdA, productIdB) => {
    const productA = R.path(['byId', productIdA], products);
    const productB = R.path(['byId', productIdB], products);
    return productA.title < productB.title;
  }, products.allIds);

  return {
    ...products,
    allIds: sortedProductsAllIds,
  };
};
