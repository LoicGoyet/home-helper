import React from 'react';
import { useSelector } from 'react-redux';

import { selectors as productsSelectors } from 'ducks/todos/products';
import { selectors as categoriesSelectors } from 'ducks/todos/categories';
import { selectors as unitsSelectors } from 'ducks/todos/units';

export const TODOS_CATEGORIES_SUGGESTIONS = 'category-suggestions';
export const TODOS_PRODUCTS_SUGGESTIONS = 'title-suggestions';
export const TODOS_UNITS_SUGGESTIONS = 'units-suggestions';

const SuggestionsLists = () => {
  const products = useSelector(productsSelectors.getProductsByAlphabetical);
  const categories = useSelector(categoriesSelectors.getCategoriesByAlphabetical);
  const units = useSelector(unitsSelectors.getUnitsByAlphabetical);

  return (
    <React.Fragment>
      <datalist id={TODOS_CATEGORIES_SUGGESTIONS}>
        {categories.allIds.map(id => (
          <option key={`category-${id}`} value={categories.byId[id].title} />
        ))}
      </datalist>

      <datalist id={TODOS_PRODUCTS_SUGGESTIONS}>
        {products.allIds.map(id => (
          <option key={`products-${id}`} value={products.byId[id].title} />
        ))}
      </datalist>

      <datalist id={TODOS_UNITS_SUGGESTIONS}>
        {units.allIds.map(id => (
          <option key={`units-${id}`} value={units.byId[id].title} />
        ))}
      </datalist>
    </React.Fragment>
  );
};

export default SuggestionsLists;
