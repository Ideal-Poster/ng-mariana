import { Component } from '@angular/core';

@Component({
  selector: 'events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent {
  events = [
    {
      group: 'The Lovelace Band',
      venue: 'The Branded Saloon',
      location: '603 Vanderbilt Ave, Brooklyn, NY 11238',
      day: 'Fri',
      dayNum: '10',
      month: 'Aug'
    },
    {
      group: 'The Lovelace Band',
      venue: 'Bar 9',
      location: '807 9th Ave, New York, NY 10019',
      day: 'Sun',
      dayNum: '2',
      month: 'Sep'
    },
    {
      group: 'Smoke and Sugar',
      venue: 'The Groove',
      location: '125 Macdougal St A, New York, NY 10012',
      day: 'Thur\'s',
      dayNum: '',
      month: ''
    }
  ];


  constructor() { }
}
