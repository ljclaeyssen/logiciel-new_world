import {Routes} from '@angular/router';
import {WeeklyPurchasablesComponent} from './weekly-purchasables/weekly-purchasables.component';
import {WeeklyPveComponent} from './weekly-pve/weekly-pve.component';

export const weeklyContentRoutes: Routes = [
    {
      path: '',
      loadComponent: () =>
        import('./weekly-content.component').then(m => m.WeeklyContentComponent),
      children: [
        {
          path: 'activities',
          component: WeeklyPveComponent,
        },
        {
          path: 'purchasables',
          component: WeeklyPurchasablesComponent,
        },
        {
          path: '**',
          redirectTo: 'activities'
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'ecr'
    }
  ]
;
