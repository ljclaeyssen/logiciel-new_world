import {Routes} from '@angular/router';
import {DailyPVEComponent} from './dungeons/daily-pve.component';
import {EliteChestRunComponent} from './elite-chest-run/elite-chest-run.component';
import {DailyPurchasablesComponent} from './purchasables/daily-purchasables.component';

export const dailyContentRoutes: Routes = [
    {
      path: '',
      loadComponent: () =>
        import('./daily-content.component').then(m => m.DailyContentComponent),
      children: [
        {
          path: 'ecr',
          component: EliteChestRunComponent,
        },
        {
          path: 'activities',
          component: DailyPVEComponent,
        },
        {
          path: 'purchasables',
          component: DailyPurchasablesComponent,
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'ecr'
    }
  ]
;
