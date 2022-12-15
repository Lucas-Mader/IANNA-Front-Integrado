import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { SpecialServicesComponent } from "./special-services.component";

@NgModule({
    declarations: [
        SpecialServicesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [SpecialServicesComponent]
})

export class SpecialServicesModule { }