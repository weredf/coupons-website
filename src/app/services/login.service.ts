import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(email:string, password:string, clientTypeString:string): Observable<HttpEvent<string>>{
    let url = "http://localhost:8080/login";
    let body = "email=" + email + "&password=" + password + "&clientTypeString=" + clientTypeString;
    let theHeaders = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    let options:any = {headers: theHeaders, responseType: 'text'};
    return this.httpClient.post<string>(url, body, options);
  }
}
