import { Routes } from '@angular/router';

export const full: Routes = [
  {
    path: '',
    loadChildren: () => import('../../landing-page/header/authentication/authentication.routes')
  },
];


