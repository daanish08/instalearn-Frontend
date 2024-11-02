import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private apiUrl = 'http://localhost:8080/instalearn/api/v1/course/list';
  private createLink='http://localhost:8080/instalearn/admin/A2/addCourse'
  

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any>{
    console.log("Inside getting it");
    return this.http.get(this.apiUrl);
  }

  getCoursesCreated(courseName: string, description: string, duration: number, instructor: string, attachments: { fileName: string, fileLocation: string }[]): Observable<any> {
    const courseData = {
      name: courseName,
      description: description,
      duration: duration,
      instructor: instructor,
      attachments: attachments
    };

    console.log('Creating', courseData);

    return this.http.post(this.createLink, courseData);
  }
}