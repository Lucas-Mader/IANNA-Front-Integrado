import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ButtonComponent } from "./button.component";

@NgModule({
    declarations: [
        ButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [ButtonComponent]
})

export class InputsModule { }