import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
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