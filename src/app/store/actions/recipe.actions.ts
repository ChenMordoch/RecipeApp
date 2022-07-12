import { createAction, props } from '@ngrx/store';

export const loadRecipes = createAction('[Recipe List Component] Load Recipes');
export const loadRecipesSuccess = createAction(
  '[Recipe List Component] Load Recipes Success',
  props<{ data: any }>()
);

export const addRecipe = createAction('[Recipe List Component] Add Recipe');
