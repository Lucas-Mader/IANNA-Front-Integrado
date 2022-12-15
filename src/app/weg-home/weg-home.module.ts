import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { WegHomeComponent } from "./weg-home.component";

@NgModule({
    declarations: [
        WegHomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [WegHomeComponent]
})

export class WegHomeModule { }