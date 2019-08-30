import * as R from 'ramda';

export const filterTasksByUndone = tasks => {
  const filteredTasksById = R.filter(task => !task.done, tasks.byId);

  return {
    byId: filteredTasksById,
    allIds: Object.keys(filteredTasksById),
  };
};

export const filterTasksByDone = tasks => {
  const filteredTasksById = R.filter(task => task.done, tasks.byId);

  return {
    byId: filteredTasksById,
    allIds: Object.keys(filteredTasksById),
  };
};

export const sortTasksByDateDesc = tasks => {
  const sortedTasksAllIds = R.sort((taskIdA, taskIdB) => {
    const taskA = R.path(['byId', taskIdA], tasks);
    const taskB = R.path(['byId', taskIdB], tasks);
    return taskB.updatedAt - taskA.updatedAt;
  }, tasks.allIds);

  return {
    ...tasks,
    allIds: sortedTasksAllIds,
  };
};

export const sortTasksByDateAsc = tasks => {
  const sortedTasksIds = R.sort((taskIdA, taskIdB) => {
    const taskA = R.path(['byId', taskIdA], tasks);
    const taskB = R.path(['byId', taskIdB], tasks);
    return taskA.updatedAt - taskB.updatedAt;
  }, tasks.allIds);

  return {
    ...tasks,
    allIds: sortedTasksIds,
  };
};

export const unfoldTasks = (products, units, categories) => tasks => {
  const unfoledTasksById = R.map(task => {
    const product = R.path(['byId', task.product], products);
    const category = R.path(['byId', product.category], categories);
    const unit = R.path(['byId', task.unit], units);

    return {
      ...task,
      product: {
        ...product,
        category,
      },
      unit,
    };
  }, tasks.byId);

  return {
    ...tasks,
    byId: unfoledTasksById,
  };
};

export const reshapeTasksByCategories = (products, units, categories) => tasks => {
  const unfoldedTasks = unfoldTasks(products, units, categories)(tasks);

  const tasksByCategory = unfoldedTasks.allIds.reduce(
    (acc, taskId) => {
      const task = unfoldedTasks.byId[taskId];
      const categoryId = R.path(['product', 'category', 'id'], task);
      const isCategoryKnown = acc.allIds.includes(categoryId);

      if (!isCategoryKnown) {
        return {
          ...acc,
          byId: {
            ...acc.byId,
            [categoryId]: {
              allIds: [taskId],
              byId: {
                [taskId]: task,
              },
            },
          },
          allIds: [...acc.allIds, categoryId],
        };
      }

      return {
        ...acc,
        byId: {
          ...acc.byId,
          [categoryId]: {
            ...acc.byId[categoryId],
            allIds: [...acc.byId[categoryId].allIds, taskId],
            byId: {
              ...acc.byId[categoryId].byId,
              [taskId]: task,
            },
          },
        },
      };
    },
    {
      byId: {},
      allIds: [],
    }
  );

  return tasksByCategory;
};
