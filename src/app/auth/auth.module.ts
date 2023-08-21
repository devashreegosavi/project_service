import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations : [
        AuthComponent
    ],
    imports: [
        CommonModule, FormsModule
    ]
})
export class AuthModule{

}