import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MessengerComponent } from './messenger/messenger.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { content } from './shared/routes/routes';
import { FullContentComponent } from './landing-page/full-content/full-content.component';
import { full } from './shared/routes/full-route';


export const routes: Routes = [
    {
        path: '',
        component: MessengerComponent,
        children: content,
    },
    // {
    //     path: 'messenger',
    //     component: MessengerComponent,
    // },
    // {
    //     path: 'auth',
    //     component: FullContentComponent,
    //     children: full,
    // },
    // {
    //     path: "pages/login",
    //     component: LoginComponent,
    // },
    // {
    //     path: "pages/signup",
    //     component: SignUpComponent,
    // },
    {
        path: '**',
        redirectTo: '',
    },
];
