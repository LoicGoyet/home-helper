// Actions
const ADD_TASK = 'home-helper/todos/ADD_TASK';
const TOGGLE_TASK = 'home-helper/todos/TOGGLE_TASK';

// Default state
const defaultState = {
  baseId: 5,
  tasks: [
    {
      id: 0,
      title: 'task 1',
      done: false,
    },
    {
      id: 1,
      title: 'task 2',
      done: true,
    },
    {
      id: 2,
      title: 'task 3',
      done: true,
    },
    {
      id: 3,
      title: 'task 4',
      done: false,
    },
    {
      id: 4,
      title: 'task 5',
      done: true,
    },
  ],
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_TASK: {
      const { title } = action;

      const newTask = {
        id: state.baseId,
        title,
        done: false,
      };

      return {
        ...state,
        baseId: state.baseId + 1,
        tasks: [...state.tasks, newTask],
      };
    }

    case TOGGLE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id !== action.id) return task;

          return {
            ...task,
            done: !task.done,
          };
        }),
      };
    }

    default:
      return state;
  }
};

export default reducer;

// Action Creators

export const addTask = title => ({
  type: ADD_TASK,
  title,
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  id,
});
