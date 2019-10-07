import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  private subscriptions = [];
  public selectedRecipe: Recipe;

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    const recipesServiceSub = this.recipesService.selectedRecipe
      .subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe;
      });

    this.subscriptions.push(recipesServiceSub);
  }

  ngOnDestroy() {
    for(let sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
