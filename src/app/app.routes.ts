import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'repeatable',
    loadChildren: () =>
      import('./pages/repeatable-content/repeatable-content.routes').then(m => m.repeatableContentRoutes)
  }
];
