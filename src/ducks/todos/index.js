// Actions
export const ADD_TASK = 'home-helper/todos/ADD_TASK';
export const TOGGLE_TASK = 'home-helper/todos/TOGGLE_TASK';

// Default state
export const defaultState = {
  baseId: 0,
  tasks: [],
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_TASK: {
      const { title, category } = action;

      const newTask = {
        id: state.baseId,
        title,
        category,
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

export const addTask = (title, category) => ({
  type: ADD_TASK,
  title,
  category,
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  id,
});
