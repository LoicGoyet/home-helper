import React from 'react';
import { connect } from 'react-redux';
import { uniq } from '../../utils/arrays';

const mapStateToProps = state => ({
  categories: uniq(state.todos.tasks.map(task => task.category)),
  tasks: uniq(state.todos.tasks.map(task => task.title)),
});

export const TASK_CATEGORY_SUGGESTIONS = 'category-suggestions';
export const TASK_TITLE_SUGGESTIONS = 'title-suggestions';

export default connect(mapStateToProps)(({ categories, tasks }) => (
  <React.Fragment>
    <datalist id={TASK_CATEGORY_SUGGESTIONS}>
      {categories.map(suggestion => <option key={suggestion} value={suggestion} />)}
    </datalist>

    <datalist id={TASK_TITLE_SUGGESTIONS}>
      {tasks.map(suggestion => <option key={suggestion} value={suggestion} />)}
    </datalist>
  </React.Fragment>
));
