import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';
import {NavbarComponent} from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Toast],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'longiciel-new-world';
}
