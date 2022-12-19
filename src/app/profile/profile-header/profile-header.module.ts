import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
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