import {Component, signal} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';
import {Ripple} from 'primeng/ripple';

@Component({
  selector: 'app-navbar',
  imports: [
    Menubar
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public items = signal<MenuItem[]>(
    [
      {
        label: 'Répétable',
        icon: 'pi pi-replay',
        items: [
          {
            label: 'Journalier',
            icon: 'pi pi-calendar-clock'
          },
          {
            label: 'Hebdomadaire',
            icon: 'pi pi-calendar'
          },
        ]
      },
      {
        label: 'A faire',
        icon: 'pi pi-list-check'
      }
    ]
  )
}
