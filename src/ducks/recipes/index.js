// Actions
export const ADD_IN_COLLECTION = 'home-helper/recipes/ADD_IN_COLLECTION';

// Default state
export const defaultState = {
  baseId: 0,
  collection: [],
};

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_IN_COLLECTION: {
      const { title, tags, ingredients } = action;

      return {
        ...state,
        baseId: state.baseId + 1,
        collection: [
          ...state.collection,
          {
            id: state.baseId,
            title,
            tags,
            ingredients,
          },
        ],
      };
    }

    default:
      return state;
  }
};

export default reducer;

// Action Creators

export const addInCollection = (title, tags, ingredients) => ({
  type: ADD_IN_COLLECTION,
  title,
  tags,
  ingredients,
});
