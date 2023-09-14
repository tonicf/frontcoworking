import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassroomDetailsComponent } from './pages/classroom/classroom-details/classroom-details.component';
import { ClassroomReservationComponent } from './pages/classroom/classroom-reservation/classroom-reservation.component';
import { ClassroomsListComponent } from './pages/classroom/classrooms-list/classrooms-list.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/home/inicio.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { CalendarComponent } from './calendar/calendar.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';





@NgModule({
  declarations: [
    AppComponent,
    ClassroomDetailsComponent,
    ClassroomReservationComponent,
    ClassroomsListComponent,
    LoginFormComponent,
    ContactComponent,
    InicioComponent,
    MainLayoutComponent,
    SignupFormComponent,
    CalendarComponent,
    UserProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [UserService, CalendarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
