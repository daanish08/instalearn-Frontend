import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../../utils/environment';
import { LoginService } from '../../../login/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class CourseServiceService {
  private apiUrl = API_BASE_URL + '/api/v1/course/list';
  private createLink = API_BASE_URL + '/admin/A1/addCourse';
  private courseDataById = API_BASE_URL + '/api/v1/course/';
  private updateCourseById = API_BASE_URL + '/admin/';
  private courseByAdmin= API_BASE_URL + '/admin/';

  constructor(private http: HttpClient, private loginService: LoginService) {}

  getAllCourses(): Observable<any> {
    console.log('Inside getting it');
    return this.http.get(this.apiUrl);
  }

  getCoursesCreated(
    courseName: string,
    description: string,
    duration: number,
    instructor: string,
    courseURL: string,
    githubURL: string,
    driveURL: string
  ): Observable<any> {
    const courseData = {
      courseName: courseName,
      description: description,
      duration: duration,
      instructor: instructor,
      githubURL: githubURL,
      driveURL: driveURL,
      courseURL: courseURL,
    };

    console.log('Creating', courseData);

    return this.http.post(this.createLink, courseData);
  }

  getcourseDetailsById(courseId: number) {
    console.log('Collecting course details.....');
    const url = `${this.courseDataById}${courseId}`;
    console.log(url);
    return this.http.get(url);
  }

  getCoursesByAdminId(adminId:string| null){
    console.log('Collecting list of course details.....');
    const url = `${this.courseDataById}${adminId}`;
    return this.http.get(`${this.courseByAdmin}${adminId}/courses`);
  }


  enrollInCourse(courseId: number): Observable<string> {
    return this.http.post<string>(
      `${API_BASE_URL}/api/v1/U${this.loginService.auth.id}/C${courseId}/enroll`,
      {},
      { responseType: 'text' as 'json' }
    );
  }

  


  handleupdateCourse(courseData: any, adminId: number, courseId: number) {
    console.log("Updating the course......");
    return this.http.put<string>(
      `${API_BASE_URL}/admin/A${adminId}/C${courseId}/update`,
      courseData
    );
  }
  
  deleteCourse(adminId:number,courseId:number){
    return this.http.delete<string>(`${API_BASE_URL}/admin/A${adminId}/C${courseId}/delete`);
  }
}
