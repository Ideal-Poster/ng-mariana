import { Component } from '@angular/core';
import { fadeAnimation } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  constructor(
    // private db: AngularFirestore
  ) {}


}
