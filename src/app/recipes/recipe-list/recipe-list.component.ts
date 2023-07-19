import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes : Recipe[] = [
      new Recipe('A Test Recipe one','This is a simply Test one',
      'https://img.delicious.com.au/Iok992Gi/w759-h506-cfill/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
      new Recipe('A Test Recipe two','This is a simply Test two',
      'https://img.delicious.com.au/Iok992Gi/w759-h506-cfill/del/2022/02/chicken-chickpea-curry-163942-1.jpg')
    ];
    constructor(){

    }
    ngOnInit(): void {

    }

    onRecipeSelected(recipe : Recipe){
        this.recipeWasSelected.emit(recipe);
    }
}
