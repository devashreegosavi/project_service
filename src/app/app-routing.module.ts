import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { RecipesComponent } from './recipes/recipes.component';
//import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
//import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
//import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AuthComponent } from './auth/auth.component';
//import { RecipeResolver } from './recipes/recipe.resolver'
//import { AuthGuard } from './auth/auth.guard';
const appRoutes: Routes = [
  {path : '', redirectTo :'/recipes', pathMatch : 'full'},
  { path : 'recipes', 
    loadChildren : () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'shopping-list',
    loadChildren : () => import('./shopping-list/shopping-list.module').then(n => n.ShoppingListModule)
  },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
