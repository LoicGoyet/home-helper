import { connect } from 'react-redux';

import TasksList from '../../components/TasksList';
import { isIn } from '../../utils/arrays';

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

export default connect(mapStateToProps)(TasksList);
