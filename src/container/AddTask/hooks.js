import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { normalizeStr } from 'utils/strings';

const useStoredProductId = () => {
  const products = useSelector(state => state.todos.products);

  const getProductId = useCallback(
    value => products.allIds.find(id => normalizeStr(products.byId[id].title) === normalizeStr(value)),
    [products]
  );

  return getProductId;
};

export const useAutoCategory = () => {
  const products = useSelector(state => state.todos.products);
  const categories = useSelector(state => state.todos.categories);

  const getProductId = useStoredProductId();

  const getAutoCategory = useCallback(
    value => {
      const productId = getProductId(value);
      if (productId === undefined) return;
      return categories.byId[products.byId[productId].category].title;
    },
    [getProductId, products, categories]
  );

  return getAutoCategory;
};

export const useAutoQuantityUnit = () => {
  const products = useSelector(state => state.todos.products);
  const units = useSelector(state => state.todos.units);

  const getProductId = useStoredProductId();

  const getAutoQuantityUnit = useCallback(
    value => {
      const productId = getProductId(value);
      if (productId === undefined) return;
      return units.byId[products.byId[productId].defaultUnit].title;
    },
    [getProductId, products, units]
  );

  return getAutoQuantityUnit;
};
