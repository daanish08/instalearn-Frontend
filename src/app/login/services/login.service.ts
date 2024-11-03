import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../../utils/environment';
import { Observable } from 'rxjs';
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

export interface Auth {
  id: string | null;
  role: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = API_BASE_URL;

  public auth: Auth = {
    id: null,
    role: null,
  };

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('authToken');
    if (token) {
      console.log('setting up token');
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
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('id');
    this.auth.id = null;
    localStorage.removeItem('role');
    this.auth.role = null;
  }

  getLocalStorageItem(key: string): string | null {
    return localStorage.getItem(key);
  }
}
