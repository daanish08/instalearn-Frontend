import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private apiUrl = 'http://localhost:8080/instalearn/api/v1/course/list';
  

  constructor(private http: HttpClient) { }

  getAllCourses(){
    console.log("Inside getting it");
    return this.http.get(this.apiUrl);
  }
}
