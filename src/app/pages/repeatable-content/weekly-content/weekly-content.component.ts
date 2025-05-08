import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WeeklyStore} from '../../../stores/weeklies.store';

@Component({
  selector: 'app-weekly-content',
  imports: [
    RouterOutlet
  ],
  templateUrl: './weekly-content.component.html',
  styleUrl: './weekly-content.component.css',
  providers: [WeeklyStore],
})
export class WeeklyContentComponent {

}
