import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  allRecipesUrl = '../assets/recipe.json';

  getAllRecipes() {
    const res = this.http.get<any>(this.allRecipesUrl);
    return res;
  }
}
