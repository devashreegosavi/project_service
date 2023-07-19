import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService{
    private ingredients : Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Tomato',10)
      ];

      getIngredients(){
        this.ingredients.slice();
      }
      addIngredients(ingredient : Ingredient){
        this.ingredients.push(ingredient);
      }


}