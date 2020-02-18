import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) =>  {
      this.recipe = this.recipesService.getRecipeById(+paramMap.get('id'));
    });
  }

  // add recipe ingredients to the existing shopping list
  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
