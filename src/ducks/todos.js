// Actions
const ADD_TASK = 'home-helper/todos/ADD_TASK';

// Default state
const defaultState = {};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
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
