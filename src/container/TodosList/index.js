import { connect } from 'react-redux';

import TodosList from '../../components/TodosList';
import { isIn } from '../../utils/arrays';
import * as todos from '../../ducks/todos';

const mapStateToProps = state => {
  const undoneTasks = state.todos.tasks.filter(task => !task.done);
  const doneTasks = state.todos.tasks.filter(task => task.done);

  const tasksSections = undoneTasks.reduce((sections, task) => {
    const categories = sections.map(section => section.category);

    if (!isIn(categories, task.category)) {
      return [
        ...sections,
        {
          category: task.category,
          tasks: [task],
        },
      ];
    }

    return [
      ...sections.map(section => {
        if (section.category !== task.category) return section;

        return {
          ...section,
          tasks: [...section.tasks, task],
        };
      }),
    ];
  }, []);

  return {
    tasksSections,
    doneTasks,
  };
};

const mapDispatchToProps = dispatch => ({
  updateCategory: (oldCategory, newCategory) => dispatch(todos.updateCategory(oldCategory, newCategory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
