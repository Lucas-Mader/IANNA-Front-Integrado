import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ProfileBodyComponent } from "./profile-body.component";

@NgModule({
    declarations: [
        ProfileBodyComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ProfileBodyComponent],
    providers: []
})

export class ProfileBodyModule { }