import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegService {

  private apiUrl = 'http://localhost:8080/instalearn/user/add'; // Your backend API URL

  constructor(private http: HttpClient) { }

  // Method to send registration data to the backend
  registerUser(user: any): Observable<any> {
      return this.http.post<any>(this.apiUrl,user);
  }
}
