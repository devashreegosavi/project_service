import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipeResolver } from '../recipes/recipe.resolver'
import { AuthGuard } from '../auth/auth.guard';

const routes : Routes = [
    {
        path : 'recipes', component : RecipesComponent,
        canActivate : [AuthGuard],
        children : [
        {
            path : '',
            component:RecipeStartComponent
        },
        {
            path : 'new',
            component : RecipeEditComponent},
        {
          path : ':id', 
          component : RecipeDetailComponent,
          resolve: {
            routeResolver: RecipeResolver
          }    
        },
        {
          path : ':id/edit',
          component : RecipeEditComponent,
          resolve: {
            routeResolver: RecipeResolver
          }
        }
      ]
    },
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule{

}