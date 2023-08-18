import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AuthComponent } from './auth/auth.component';
import { RecipeResolver } from './recipes/recipe.resolver'
import { AuthGuard } from './auth/auth.guard';
const appRoutes: Routes = [
  {path : '', redirectTo :'/recipes', pathMatch : 'full'},
  {path : 'recipes', component : RecipesComponent,
  canActivate : [AuthGuard],
   children : [
      {path : '', component:RecipeStartComponent},
      {path : 'new', component : RecipeEditComponent},
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
    ]},
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
