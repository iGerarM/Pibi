import { Component } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [RouterLink, NgbTooltip]
})
export class LoginComponent {

}
