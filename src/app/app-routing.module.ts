import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'favorites', component: RecipeListComponent },
  { path: 'addRecipe', component: RecipeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
