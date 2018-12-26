import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { products, units, categories } = state.todos;

  const sort = (a, b, collection) => {
    const titleA = collection.byId[a].title; // ignore upper and lowercase
    const titleB = collection.byId[b].title; // ignore upper and lowercase

    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }

    // names must be equal
    return 0;
  };

  return {
    products: {
      ...products,
      allIds: products.allIds.sort((a, b) => sort(a, b, products)),
    },
    units: {
      ...units,
      allIds: units.allIds.sort((a, b) => sort(a, b, units)),
    },
    categories: {
      ...categories,
      allIds: categories.allIds.sort((a, b) => sort(a, b, categories)),
    },
  };
};

export const TODOS_CATEGORIES_SUGGESTIONS = 'category-suggestions';
export const TODOS_PRODUCTS_SUGGESTIONS = 'title-suggestions';
export const TODOS_UNITS_SUGGESTIONS = 'units-suggestions';

export default connect(mapStateToProps)(({ categories, products, units }) => (
  <React.Fragment>
    <datalist id={TODOS_CATEGORIES_SUGGESTIONS}>
      {categories.allIds.map(id => <option key={`category-${id}`} value={categories.byId[id].title} />)}
    </datalist>

    <datalist id={TODOS_PRODUCTS_SUGGESTIONS}>
      {products.allIds.map(id => <option key={`products-${id}`} value={products.byId[id].title} />)}
    </datalist>

    <datalist id={TODOS_UNITS_SUGGESTIONS}>
      {units.allIds.map(id => <option key={`units-${id}`} value={units.byId[id].title} />)}
    </datalist>
  </React.Fragment>
));
