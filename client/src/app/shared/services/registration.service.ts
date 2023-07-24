import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private api = 'http://localhost:3000/user/register';

  constructor(private http: HttpClient) {}

  registerUser(userData: Register): Observable<any> {
    return this.http.post<any>(this.api, userData);
  }
}
