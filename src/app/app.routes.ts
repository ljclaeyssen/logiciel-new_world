import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'repeatable',
    loadChildren: () =>
      import('./repeatable-content/repeatable-content.routes').then(m => m.repeatableContentRoutes)
  }
];
