import { Routes } from '@angular/router';
export const content: Routes = [
  {
    path: '',
    loadChildren: () =>import('../../landing-page/landing.routes')
  }
]