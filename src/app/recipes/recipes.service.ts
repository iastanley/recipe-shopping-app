import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService {
  public selectedRecipe = new EventEmitter<Recipe>();

  private recipesArray: Recipe[] = [
    new Recipe(
      'pizza',
      'a round food',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [ new Ingredient('tomatoes', 2), new Ingredient('cheese', 1), new Ingredient('dough', 4)]
    ),
    new Recipe(
      'Chilli',
      'A savory delight',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [ new Ingredient('ground turkey', 1), new Ingredient('red peppers', 1), new Ingredient('chicken broth', 2), new Ingredient('onions', 3)]
    ),
    new Recipe(
      'TEST2',
      'Testing for recipe #2',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [ new Ingredient('poop', 1)]
    )
  ];

  public get recipes() {
    return [...this.recipesArray] // return a copy of the recipes array
  }
  
}