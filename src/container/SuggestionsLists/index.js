import React from 'react';
import { connect } from 'react-redux';
import { uniq } from '../../utils/arrays';

const mapStateToProps = state => {
  const { tasks } = state.todos;

  return {
    units: uniq(Object.values(state.todos.tasks.units)),

    tasks: tasks.allIds.reduce((acc, id) => {
      const { title } = tasks.byId[id];
      if (acc.indexOf(title) === -1) return [...acc];
      return [...acc, title];
    }, []),

    categories: tasks.allIds.reduce((acc, id) => {
      const { category } = tasks.byId[id];
      if (acc.indexOf(category) === -1) return [...acc];
      return [...acc, category];
    }, []),
  };
};

export const TASK_CATEGORY_SUGGESTIONS = 'category-suggestions';
export const TASK_TITLE_SUGGESTIONS = 'title-suggestions';
export const TASK_QUANTITY_UNIT_SUGGESTIONS = 'quantity-unit-suggestions';

export default connect(mapStateToProps)(({ categories, tasks, units }) => (
  <React.Fragment>
    <datalist id={TASK_CATEGORY_SUGGESTIONS}>
      {categories.map(suggestion => <option key={suggestion} value={suggestion} />)}
    </datalist>

    <datalist id={TASK_TITLE_SUGGESTIONS}>
      {tasks.map(suggestion => <option key={suggestion} value={suggestion} />)}
    </datalist>

    <datalist id={TASK_QUANTITY_UNIT_SUGGESTIONS}>
      {units.map(suggestion => <option key={suggestion} value={suggestion} />)}
    </datalist>
  </React.Fragment>
));
