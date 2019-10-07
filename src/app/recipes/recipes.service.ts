import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipesService {
  public selectedRecipe = new EventEmitter<Recipe>();

  private recipesArray: Recipe[] = [
    new Recipe(
      'pizza',
      'a round food',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
    ),
    new Recipe(
      'TEST',
      'Testing for recipe #2',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
    ),
    new Recipe(
      'TEST2',
      'Testing for recipe #2',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
    )
  ];

  public get recipes() {
    return [...this.recipesArray] // return a copy of the recipes array
  }
  
}