import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private apiUrl = 'http://localhost:8080/instalearn/api/v1/course/list';
  private createLink='http://localhost:8080/instalearn/admin/A1/addCourse'
  private courseDataById='http://localhost:8080/instalearn/api/v1/course/'
  private baseUrl='http://localhost:8080/instalearn/api/v1'
  

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any>{
    console.log("Inside getting it");
    return this.http.get(this.apiUrl);
  }

  getCoursesCreated(courseName: string, description: string, duration: number, instructor: string, courseURL:string,githubURL:string,driveURL:string): Observable<any> {
    const courseData = {
      courseName: courseName,
      description: description,
      duration: duration,
      instructor: instructor,
      githubURL:githubURL,
      driveURL:driveURL,
      courseURL:courseURL
    };

    console.log('Creating', courseData);

    return this.http.post(this.createLink, courseData);
  }

  getcourseDetailsById(courseId:number){
    console.log("Collecting course details.....");
    const url = `${this.courseDataById}${courseId}`;
    return this.http.get(url);
  }

  enrollInCourse(userId: number, courseId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/enrollments`, { userId, courseId });
  }
}