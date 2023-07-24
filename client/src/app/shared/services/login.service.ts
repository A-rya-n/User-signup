import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private api = 'http://localhost:3000/user/login';

  constructor(private http: HttpClient) {}

  loginUser(loginData: Login): Observable<any> {
    return this.http.post<any>(this.api, loginData);
  }
}
