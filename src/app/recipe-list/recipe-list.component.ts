import { Component, OnInit } from '@angular/core';
import {AppState, selectRecipesShow} from "../store/reducers/recipe.reducer";
import { Store } from '@ngrx/store';
import {loadRecipes} from "../store/actions/recipe.actions";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: any | undefined;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadRecipes());
    this.store.select(selectRecipesShow).subscribe(recipes => this.recipes = recipes);
  }

  ngOnInit(): void {
  }

}
