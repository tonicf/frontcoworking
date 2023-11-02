import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from '../../../calendar/calendar.component';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ClassroomService } from 'src/app/classroom.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.css'],
})
export class ClassroomDetailsComponent implements OnInit {
  authorized: any = false;
  espacio = new FormControl('2');
  dataDate: any;
  date = new FormControl(new Date());

  constructor(public classroomService: ClassroomService) {
    this.date.setValue(new Date());
    this.espacio.valueChanges.subscribe((value) => {
      this.checkAvailability(value);
    });
  }

  ngOnInit() {
    this.authorized = localStorage.getItem('authorized')
      ? localStorage.getItem('authorized')
      : false;
    this.checkAvailability(this.espacio.value);
  }

  reservation() {}

  checkAvailability(id: any) {
    let token: any = localStorage.getItem('token');
    this.classroomService.getAvailability(id, token).subscribe({
      next: (response) => {
        this.dataDate = response
          .filter((value: any) => value.notAvailable)
          .map((value: any) => new Date(value.date));
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  dateFilterAvailability(date: Date | null): boolean {
    if (!this.dataDate) {
      return true;
    }
    let time = (date || new Date()).getDate();
    return !this.dataDate.find((day: any) => {
      console.log(day.getDate());
      console.log(time);
      console.log(day.getDate() == time);
      return day.getDate() == time;
    });
  }

  filterAvailabilityDay = this.dateFilterAvailability.bind(this);

  booking() {
    let selectedDate = this.date.value;
    let bookingDate = '';
    let idUser = localStorage.getItem('idUser');
    let classroomId = this.espacio.value;

    if (selectedDate) {
      let day =
        selectedDate.getDate().toString().length == 1
          ? '0' + selectedDate.getDate()
          : selectedDate.getDate();
      let month = selectedDate.getMonth() + 1;
      let year = selectedDate.getFullYear();
      bookingDate = `${year}-${month}-${day}`;
    }
    if (bookingDate != '' && classroomId && idUser) {
      let token: any = localStorage.getItem('token');
      const booking = {
        userId: parseInt(idUser),
        classroomId: parseInt(classroomId),
        startDate: bookingDate,
        endDate: bookingDate,
      };
      this.classroomService.setReservation(booking, token).subscribe({
        next:(response) => {alert("Reserva realizada con exito, el personal del Ayuntamiento se pondrá en contacto con usted")},
        error:(response) => {alert("No ha podido realizarse la reserva"); 
      }

      });
    }
  }
}
