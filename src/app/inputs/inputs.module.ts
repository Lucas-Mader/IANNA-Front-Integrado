import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { InputsComponent } from "./inputs.component";

@NgModule({
    declarations: [
        InputsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [InputsComponent]
})

export class InputsModule { }