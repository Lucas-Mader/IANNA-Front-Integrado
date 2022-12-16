import { Component } from "@angular/core";

@Component({
    selector: 'app-profile-header',
    templateUrl: './profile-header.component.html',
    styleUrls: ['./profile-header.component.css']
})

export class ProfileHeaderComponent {

    hover_arrow(): void {
        document.getElementById('blue_rectangle')
    }
}