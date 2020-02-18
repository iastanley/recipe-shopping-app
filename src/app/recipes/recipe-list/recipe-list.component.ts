import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  @Output() selectRecipe = new EventEmitter<Recipe>();

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.recipes = this.recipesService.recipes;
  }

  public goToNewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
