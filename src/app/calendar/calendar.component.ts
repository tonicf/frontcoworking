import {
  Component,
  Injectable,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnChanges {
  @Input() dataDate: Array<Date> = [];
  viewDate: Date = new Date(); // Fecha actual
  events: CalendarEvent[] = [
    {
      start: new Date(), // Fecha y hora de inicio del evento
      title: 'Evento 1', // Título del evento
    },
  ];
  constructor() {}

  ngOnInit() {
    console.log(this.dataDate);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataDate = changes['dataDate'].currentValue;
    console.log(this.dataDate);
  }
}
