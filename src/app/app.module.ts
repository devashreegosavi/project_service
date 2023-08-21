import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { RecipesComponent } from './recipes/recipes.component';
//import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
//import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
//import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

//import { DropdownDirective } from './shared/dropdown.directive';
//import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
//import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
//import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
//import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
//import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
//import { AuthInterceptorService } from './auth/auth-interceptor.service';
//import { AlertComponent } from './shared/alert/alert.component';
//import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
//import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
//import { RecipesModule } from './recipes/recipes.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //RecipesComponent,
    //RecipeListComponent,
    //RecipeDetailComponent,
    //RecipeItemComponent,
    //DropdownDirective,
    //RecipeStartComponent,
    //RecipeEditComponent,
    AuthComponent
    //LoadingSpinnerComponent,
    //AlertComponent,
    //PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //ShoppingListModule,
    SharedModule,
    CoreModule
    //RecipesModule
  ],
  
  bootstrap: [AppComponent]
  
})
export class AppModule { }
