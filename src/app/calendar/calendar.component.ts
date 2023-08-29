import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  viewDate: Date = new Date(); // Fecha actual
  events: CalendarEvent[] = [
    {
      start: new Date(), // Fecha y hora de inicio del evento
      title: 'Evento 1', // Título del evento
    },
  ];
}
