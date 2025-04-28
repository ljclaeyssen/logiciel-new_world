import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DailiesStore} from '../../../stores/dailies-store';

@Component({
  selector: 'app-daily-content',
  imports: [
    RouterOutlet
  ],
  templateUrl: './daily-content.component.html',
  styleUrl: './daily-content.component.css',
  providers: [DailiesStore],
})
export class DailyContentComponent {

}
