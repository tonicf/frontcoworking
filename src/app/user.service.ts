import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post("funcion backend",user);//falta añadir función del backend
  }
  register(user: any, url:string): Observable<any> {
    const httpHeaders = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post("http://localhost:8080/api/v1/users",user, httpHeaders);
  }

 
}
