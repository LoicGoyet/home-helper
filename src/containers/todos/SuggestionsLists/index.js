import React from 'react';
import { useSelector } from 'react-redux';

import * as productsDuck from 'ducks/todos/products';
import * as categoriesDuck from 'ducks/todos/categories';
import * as unitsDuck from 'ducks/todos/units';

export const TODOS_CATEGORIES_SUGGESTIONS = 'category-suggestions';
export const TODOS_PRODUCTS_SUGGESTIONS = 'title-suggestions';
export const TODOS_UNITS_SUGGESTIONS = 'units-suggestions';

const SuggestionsLists = () => {
  const products = useSelector(productsDuck.selectors.getProductsByAlphabetical);
  const categories = useSelector(categoriesDuck.selectors.getCategoriesByAlphabetical);
  const units = useSelector(unitsDuck.selectors.getUnitsByAlphabetical);

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
