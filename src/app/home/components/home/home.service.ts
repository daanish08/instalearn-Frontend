import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = 'http://localhost:8080/instalearn/api/v1/course/list';
  constructor(private http: HttpClient) {}
  getCourses() {
    console.log('Inside Home service');
    return this.http.get(this.apiUrl);
  }
}
