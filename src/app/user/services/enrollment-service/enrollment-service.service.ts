import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentServiceService {


  constructor(private http:HttpClient) { }

  getEnrolledCoursesCount(userId:string){
    return this.http.get(`http://localhost:8080/instalearn/api/v1/${userId}/enroll/count`);
  }

  
  getEnrollmentUsersList(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/instalearn/api/v1/enrollments");
  }

  getEnrollmentsListByUserId(userId:number):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/instalearn/api/v1/${userId}/enroll/courses/all`);

  }
}
