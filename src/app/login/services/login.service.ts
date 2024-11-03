import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../../utils/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface loginResponse {
  jwt: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = API_BASE_URL;

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<loginResponse> {
    return this.http
      .post<loginResponse>(`${this.apiUrl}/auth/login`, loginRequest)
      .pipe(
        map((token: loginResponse) => {
          if (token) {
            localStorage.setItem('authToken', token.jwt);
          }
          return token;
        })
      );
  }
}
