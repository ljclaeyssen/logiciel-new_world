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
          icon: 'ra ra-boot-stomp',
          routerLink: 'daily/ecr',
        },
        {
          label: 'PVE',
          icon: 'ra ra-sword',
          routerLink: 'daily/activities',
        },
        {
          label: 'Achats',
          icon: 'ra ra-crown',
          routerLink: 'daily/purchasables',
        },
        {
          label: 'Evènements',
          icon: 'ra ra-beer',
          routerLink: 'daily/event',
        }
      ]
    },
    {
      label: 'Hebdomadaire',
      icon: 'pi pi-calendar',
      items: [
        {
          label: 'PVE',
          icon: 'ra ra-sword',
          routerLink: 'weekly/activities',
        },
        {
          label: 'Achats',
          icon: 'ra ra-crown',
          routerLink: 'weekly/purchasables',
        },
        {
          label: 'Evènements',
          icon: 'ra ra-beer',
          routerLink: 'weekly/event',
        }
      ],
    },
  ])
}
