import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: any): Observable<any> {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      'http://localhost:8080/api/v1/login',
      user,
      httpHeaders
    );
  }
  register(user: any): Observable<any> {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      'http://localhost:8080/api/v1/users',
      user,
      httpHeaders
    );
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('idUser');
    localStorage.removeItem('authorized');

    this.router.navigate(['/']);
  }
  getData(id: number, token: string) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.http.get(
      'http://localhost:8080/api/v1/users/' + id,
      httpHeaders
    );
  }

  setData(user: any, id: number, token: string) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.http.put(
      'http://localhost:8080/api/v1/users/' + id,
      user,
      httpHeaders
    );
  }
}
