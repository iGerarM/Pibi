import { Routes } from '@angular/router';
import { SignInClassicComponent } from './sign-in-classic/sign-in-classic.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpClassicComponent } from './sign-up-classic/sign-up-classic.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export default [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-in-classic',
    component: SignInClassicComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'sign-up-classic',
    component: SignUpClassicComponent,
  },
] as Routes;

