import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClassroomService {
  constructor(private http: HttpClient) {}

  getAvailability(id: number, token: string): Observable<any> {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.http.get(
      'http://localhost:8080/api/v1/reservation/availability/' + id,
      httpHeaders
    );
  }

  setReservation(booking: any, token: string): Observable<any> {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.http.post(
      'http://localhost:8080/api/v1/reservation',
      booking,
      httpHeaders
    );
  }
}
