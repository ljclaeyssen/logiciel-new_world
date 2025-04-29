import {Routes} from '@angular/router';
import {DailyPVEComponent} from './dungeons/daily-pve.component';
import {EliteChestRunComponent} from './elite-chest-run/elite-chest-run.component';

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
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'ecr'
    }
  ]
;
