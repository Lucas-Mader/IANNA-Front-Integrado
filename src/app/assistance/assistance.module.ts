import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { AssistanceComponent } from "./assistance.component";

@NgModule({
    declarations: [
        AssistanceComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AssistanceComponent]
})

export class AssistanceModule { }