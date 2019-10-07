import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[];
  private subscriptions = [];

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    // initialize to the initial value of the ingredients in service
    this.ingredients = this.shoppingListService.ingredients;
    
    // subscribe to changes to ingredient list
    const shoppingListSubscription = this.shoppingListService
      .ingredientsUpdated
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });

    this.subscriptions.push(shoppingListSubscription);
  }

  ngOnDestroy() {
    for(let sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
