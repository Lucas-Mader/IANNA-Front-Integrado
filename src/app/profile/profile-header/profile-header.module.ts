import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ProfileHeaderComponent } from "./profile-header.component";

@NgModule({
    declarations: [
        ProfileHeaderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ProfileHeaderComponent],
    providers: []
})

export class ProfileHeaderModule { }