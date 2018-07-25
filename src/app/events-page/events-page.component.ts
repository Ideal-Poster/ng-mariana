import { Component } from '@angular/core';

@Component({
  selector: 'events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent {
  events = [
    {
      group: 'Smoke and Sugar',
      venue: 'Interglow',
    },
    {
      group: 'Smoke and Sugar',
      venue: 'Interglow',
    },
    {
      group: 'Smoke and Sugar',
      venue: 'Interglow',
    }
  ];


  constructor() { }
}
