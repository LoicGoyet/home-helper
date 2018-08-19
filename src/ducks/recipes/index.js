// Actions
import { takeLatest, select, put, all } from 'redux-saga/effects';

import { ADD_TASK } from '../todos/tasks';
import Config from '../../config';
import database from '../../utils/database';

export const FETCH = 'home-helper/recipes/FETCH';
export const FETCH_SUCCESS = 'home-helper/recipes/FETCH_SUCCESS';
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
    case FETCH_SUCCESS: {
      return action.data;
    }

    case ADD_IN_COLLECTION: {
      const { title, tags, ingredients, link } = action;

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
            link,
          },
        ],
      };
    }

    case ADD_IN_PANTRY: {
      const recipeSelected = getRecipeInCollection(state, action.id);

      const pantry = state.pantry || [];

      return {
        ...state,
        basePantryId: state.basePantryId + 1,
        pantry: [
          ...pantry,
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

export const addInCollection = (title, tags, ingredients, link) => ({
  type: ADD_IN_COLLECTION,
  title,
  tags,
  ingredients,
  link,
});

export const addInPantry = id => ({
  type: ADD_IN_PANTRY,
  id,
});

export const toggleAvailabilityInPantry = id => ({
  type: TOGGLE_AVAILABILITY_IN_PANTRY,
  id,
});

export const fetch = () => ({
  type: FETCH,
});

// Sagas

function* addIngredientsInTodos({ id }) {
  const { ingredients } = yield select(state => getRecipeInCollection(state.recipes, id));

  yield all(ingredients.map(ingredient => put({ type: ADD_TASK, ...ingredient })));
}

function* fetchRecipes() {
  if (Config.USE_MOCK) return yield;

  const data = yield database
    .ref('/recipes')
    .once('value')
    .then(snapshot => snapshot.val());

  yield put({ type: FETCH_SUCCESS, data });
}

function* saveRecipes() {
  if (Config.USE_MOCK) return yield;
  const { recipes } = yield select(state => state);
  yield database.ref('/recipes').set(recipes);
}

export function* recipesSaga() {
  yield takeLatest(FETCH, fetchRecipes);
  yield takeLatest(ADD_IN_PANTRY, addIngredientsInTodos);
  yield takeLatest(ADD_IN_COLLECTION, saveRecipes);
  yield takeLatest(ADD_IN_PANTRY, saveRecipes);
  yield takeLatest(TOGGLE_AVAILABILITY_IN_PANTRY, saveRecipes);
}
