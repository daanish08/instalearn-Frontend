import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../../models/IAdmin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private fetchUsers = 'http://localhost:8080/instalearn/admin/users';
  private fetchUsersCount='http://localhost:8080/instalearn/admin/usersCount'
  private fetchFeedbackCount='http://localhost:8080/instalearn/admin/feedbacks/count'
  private fetchDetailsById='http://localhost:8080/instalearn/admin/AdminList'
  private fetchAdminDetailsById='http://localhost:8080/instalearn/admin/AdminList/'
  private CourseCountByAdminId='http://localhost:8080/instalearn/api/v1/course'
  private countUsers=0;
  
  
  constructor(private http: HttpClient) { }

  getUserList(): Observable<any>{
    console.log("Fetching users....");
    return this.http.get(this.fetchUsers);
  }

  getUserName(id: number): Observable<string> {
    const url = `http://localhost:8080/instalearn/admin/adminList/${id}`;
    return this.http.get<string>(url);
  }


  getUserCount(): Observable<number> {
    return this.http.get<number>(this.fetchUsersCount); // Ensure this.countUsers is the correct endpoint URL
  }
  
  getFeedbackCount(): Observable<number> {
    return this.http.get<number>(this.fetchFeedbackCount); // Adjust the endpoint as needed
  }

  getUploadedCoursesCount(adminId:number|undefined): Observable<number> {
    return this.http.get<number>(`${this.CourseCountByAdminId}/A${adminId}/count`); // Adjust the endpoint as needed
  }

  getPendingApprovalsCount(): Observable<number> {
    return this.http.get<number>('/api/pending-approvals-count'); // Adjust the endpoint as needed
  }

  getAdminById(id: number): Observable<Admin> {
    const url = `${this.fetchDetailsById}/${id}`;
    return this.http.get<Admin>(url);
  }

}
