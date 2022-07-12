import {Action, createReducer, on, State, createSelector} from '@ngrx/store';
import {loadRecipes, addRecipe, loadRecipesSuccess} from '../actions/recipe.actions';
import {RecipeItem} from "../models/recipeItem.model";

export interface Recipes {
  data: RecipeItem[];
};

const initialRecipesState: Recipes = {
  data: []
};

export interface AppState {
  recipes: Recipes;
};

const recipeReducer = createReducer(initialRecipesState,
  on(loadRecipesSuccess, (state, action) => {
    return ({
      ...state,
        data: action.data
    })
  }),
  on(addRecipe, state => state),
);

export const selectRecipes = (state: AppState) => state.recipes.data;

export const selectRecipesShow = createSelector(
  selectRecipes,
  (state: RecipeItem[]) => state
);
// export function recipeReducer(state: State<any>, action: Action) {
//   return _recipeReducer(state, action);
// }
