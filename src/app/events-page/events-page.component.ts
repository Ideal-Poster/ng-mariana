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
      venue: 'Rockwood',
      location: '169 Allen St New York, NY 10002',
      day: 'Thur',
      dayNum: '10',
      month: 'Dec',
      link: 'http://www.ticketfly.com/event/1783194'
    },
    {
      group: 'Mari QM',
      venue: 'Innerglow',
      location: '154 Grand St, New York, NY 10013',
      day: 'Wed',
      dayNum: '19',
      month: 'Dec',
      link: 'http://bit.ly/innerglowholiday'
    }
    // {
    //   group: 'Smoke and Sugar',
    //   venue: 'The Groove',
    //   location: '125 Macdougal St A, New York, NY 10012',
    //   day: 'Thur',
    //   dayNum: '6',
    //   month: 'Sept'
    // },    {
    //   group: 'Smoke and Sugar',
    //   venue: 'The Groove',
    //   location: '125 Macdougal St A, New York, NY 10012',
    //   day: 'Thur',
    //   dayNum: '13',
    //   month: 'Sept'
    // },    {
    //   group: 'Smoke and Sugar',
    //   venue: 'The Groove',
    //   location: '125 Macdougal St A, New York, NY 10012',
    //   day: 'Thur',
    //   dayNum: '20',
    //   month: 'Sept'
    // },    {
    //   group: 'Smoke and Sugar',
    //   venue: 'The Groove',
    //   location: '125 Macdougal St A, New York, NY 10012',
    //   day: 'Thur',
    //   dayNum: '27',
    //   month: 'Sept'
    // }
  ];


  constructor() { }
}
