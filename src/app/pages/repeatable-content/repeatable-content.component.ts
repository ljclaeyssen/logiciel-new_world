import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {Menu} from 'primeng/menu';

@Component({
  selector: 'app-repeatable-content',
  imports: [
    Menu,
    RouterOutlet
  ],
  templateUrl: './repeatable-content.component.html',
  styleUrl: './repeatable-content.component.css'
})
export class RepeatableContentComponent {
  items = signal<MenuItem[]>([
    {
      label: 'Journalier',
      icon: 'pi pi-calendar-clock',
      items: [
        {
          label: 'Elite Chest Run',
          icon: 'pi pi-sign-out',
          routerLink: 'daily/ecr',
        },
        {
          label: 'PVE',
          icon: 'pi pi-angle-down',
          routerLink: 'daily/activities',
        }
      ]
    },
    {
      label: 'Hebdomadaire',
      icon: 'pi pi-calendar',
      routerLink: 'weekly',
    },
  ])
}
