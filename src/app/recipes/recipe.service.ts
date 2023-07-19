import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes : Recipe[] = [
        new Recipe('A Test Recipe one','This is a simply Test one',
        'https://img.delicious.com.au/Iok992Gi/w759-h506-cfill/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
        new Recipe('A Test Recipe two','This is a simply Test two',
        'https://img.delicious.com.au/Iok992Gi/w759-h506-cfill/del/2022/02/chicken-chickpea-curry-163942-1.jpg')
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}