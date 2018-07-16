// Actions
import { takeLatest, select, put, all } from 'redux-saga/effects';

import { ADD_TASK } from '../todos';

export const ADD_IN_COLLECTION = 'home-helper/recipes/ADD_IN_COLLECTION';
export const ADD_IN_PANTRY = 'home-helper/recipes/ADD_IN_PANTRY';
export const TOGGLE_AVAILABILITY_IN_PANTRY = 'home-helper/recipes/TOGGLE_AVAILABILITY_IN_PANTRY';

// Default state
export const defaultState = {
  baseCollectionId: 0,
  basePantryId: 0,
  collection: [],
  pantry: [],
};

// Selectors
const getRecipeInCollection = (state, id) => state.collection.find(recipe => recipe.id === id);

// Reducer
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_IN_COLLECTION: {
      const { title, tags, ingredients } = action;

      return {
        ...state,
        baseCollectionId: state.baseCollectionId + 1,
        collection: [
          ...state.collection,
          {
            id: state.baseCollectionId,
            title,
            tags,
            ingredients,
          },
        ],
      };
    }

    case ADD_IN_PANTRY: {
      const recipeSelected = getRecipeInCollection(state, action.id);
      return {
        ...state,
        basePantryId: state.basePantryId + 1,
        pantry: [
          ...state.pantry,
          {
            id: state.basePantryId,
            done: false,
            recipe: recipeSelected,
          },
        ],
      };
    }

    case TOGGLE_AVAILABILITY_IN_PANTRY: {
      return {
        ...state,
        pantry: [
          ...state.pantry.map(recipe => {
            if (recipe.id !== action.id) return recipe;

            return {
              ...recipe,
              done: !recipe.done,
            };
          }),
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

export const addInPantry = id => ({
  type: ADD_IN_PANTRY,
  id,
});

export const toggleAvailabilityInPantry = id => ({
  type: TOGGLE_AVAILABILITY_IN_PANTRY,
  id,
});

function* addIngredientsInTodos({ id }) {
  const { ingredients } = yield select(state => getRecipeInCollection(state.recipes, id));

  yield all(ingredients.map(ingredient => put({ type: ADD_TASK, ...ingredient })));
}

export function* recipesSaga() {
  yield takeLatest(ADD_IN_PANTRY, addIngredientsInTodos);
}
