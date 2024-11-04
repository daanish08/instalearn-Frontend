import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../utils/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  jwt: string;
}

export interface JwtPayload {
  sub: string;
  role: string;
  iat: number;
  exp: number;
}

interface Auth {
  id: string | null;
  role: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = API_BASE_URL;

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  public auth: Auth = {
    id: null,
    role: null,
  };

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.storeTokenData(token);
    }
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/auth/login`, loginRequest)
      .pipe(
        map((response: LoginResponse) => {
          if (response && response.jwt) {
            this.storeTokenData(response.jwt);
          }
          return response;
        })
      );
  }

  private storeTokenData(token: string) {
    const decodedToken: JwtPayload = jwtDecode(token) as JwtPayload;
    localStorage.setItem('authToken', token);

    localStorage.setItem('id', decodedToken.sub);
    this.auth.id = decodedToken.sub;

    localStorage.setItem('role', decodedToken.role);
    this.auth.role = decodedToken.role;

    this.isLoggedInSubject.next(true);
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    this.auth.id = null;
    this.auth.role = null;
    this.isLoggedInSubject.next(false);
  }
}
