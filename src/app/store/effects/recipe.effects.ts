import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {loadRecipes, loadRecipesSuccess} from "../actions/recipe.actions";
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {RecipeService} from "../../recipe.service";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private recipeService: RecipeService
  ) {}

  loadRecipes$ = createEffect(() => this.actions$.pipe(
    ofType(loadRecipes),
    switchMap(() => this.recipeService.getAllRecipes()
      .pipe(
        map((data: any) => {
          console.log('data', data);
          return loadRecipesSuccess({data})
        }),
        catchError(() => EMPTY)
      ))
  ))
}
