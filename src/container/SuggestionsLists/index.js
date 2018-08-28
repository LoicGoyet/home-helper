import React from 'react';
import { connect } from 'react-redux';
import { uniq } from '../../utils/arrays';

const mapStateToProps = state => ({
  products: state.todos.products,
  units: state.todos.units,
  categories: state.todos.categories,
});

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
