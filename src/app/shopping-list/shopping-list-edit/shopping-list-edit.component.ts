import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('inputName', {static:false}) nameInputRef : ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputRef : ElementRef;
  
  onSubmitButton(){
    this.slService.addIngredient(new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value));
    


  }

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }

}
