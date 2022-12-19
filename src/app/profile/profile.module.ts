import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProfileHeaderModule } from "./profile-header/profile-header.module";
import { ProfileBodyModule } from "./profile-body/profile-body.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        ProfileHeaderModule,
        ProfileBodyModule
    ],
    providers: []
})

export class ProfileModule { }