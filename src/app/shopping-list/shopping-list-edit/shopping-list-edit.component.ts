import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('numberInput', {static: false}) numberInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientsCleared = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAddClick(){
    const name = this.nameInput.nativeElement.value;
    const number = this.numberInput.nativeElement.value;
    if (name && number) {
      this.ingredientAdded.emit(new Ingredient(name, number));
    }
  }

}
