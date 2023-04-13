import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserlistService } from '../services/userlist.service';
export interface DataI {
    email: string;
    Ingredients: Ingredient;
}
@Injectable({
    providedIn: 'root'
  })


export class ShoppingListService {
    ingredientsChange = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] =[ ];
    email: string = '';
    constructor(private http : HttpClient, private userlistService : UserlistService) {
        userlistService.loggedInuser.subscribe((email) => { 
            this.email = email;
        });
        this.http.get('https://waste-c95eb-default-rtdb.asia-southeast1.firebasedatabase.app/order.json')
    .pipe(map((response  ) => {
      const ingre: Ingredient[] = [];
      for(let key in response){
        if(response.hasOwnProperty(key)){
          const data = (response as any)[key];
          ingre.push(data);
        }
      }
      return ingre;
    }))
    .subscribe((response) => {
      
      this.ingredients = response;
    });
   
   
    }

    addIngredient(ingredient : Ingredient) {
      const   datam :DataI = {
            email: this.email,
            Ingredients: ingredient
        }
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());
        this.http.post('https://waste-c95eb-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', datam).subscribe((response) => { 
            console.log(response);
          });
    }
    getIngredient() {
        const ingre: Ingredient[] = [];
       this.http.get('https://waste-c95eb-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json')
    .pipe(map((response  ) => {
      
      for(let key in response){
        if(response.hasOwnProperty(key)){
          const data = (response as any)[key];
          if(data.email === this.email)
             ingre.push(data.Ingredients);
        }
      }
      return ingre;
    }))
    .subscribe((response) => {
      console.log(response);
        this.ingredients = response;
    });
  
    return ingre;
    }

    

}