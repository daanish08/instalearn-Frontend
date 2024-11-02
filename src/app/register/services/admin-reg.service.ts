import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRegService {

  private apiUrl = 'http://localhost:8080/instalearn/admin/addAdmin'; // Your backend API URL

  constructor(private http: HttpClient) { }

  // Method to send registration data to the backend
  registerAdmin(admin: any): Observable<any> {
      return this.http.post<any>(this.apiUrl,admin);
  }
}
