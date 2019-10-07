import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  public ingredientsUpdated = new EventEmitter<Ingredient[]>();
  private ingredientList: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];
  
  get ingredients() {
    return [...this.ingredientList];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredientList.push(ingredient);
    this.ingredientsUpdated.emit(this.ingredients);
  }

  clearIngredients() {
    this.ingredientList = [];
    this.ingredientsUpdated.emit(this.ingredients);
  }
}