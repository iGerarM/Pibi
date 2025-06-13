import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sign-up-classic',
    templateUrl: './sign-up-classic.component.html',
    styleUrls: ['./sign-up-classic.component.scss'],
    imports: [RouterLink, FormsModule]
})
export class SignUpClassicComponent {

}
