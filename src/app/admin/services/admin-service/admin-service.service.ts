import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private fetchUsers = 'http://localhost:8080/instalearn/admin/users';
  private fetchUsersCount='http://localhost:8080/instalearn/admin/usersCount'
  private fetchFeedbackCount='http://localhost:8080/instalearn/admin/feedbacks/count'

  private countUsers=0;
  constructor(private http: HttpClient) { }

  getUserList(): Observable<any>{
    console.log("Fetching users....");
    return this.http.get(this.fetchUsers);
  }
  getUserCount(): Observable<number> {
    return this.http.get<number>(this.fetchUsersCount); // Ensure this.countUsers is the correct endpoint URL
  }
  
  getFeedbackCount(): Observable<number> {
    return this.http.get<number>(this.fetchFeedbackCount); // Adjust the endpoint as needed
  }

  getEnrolledCoursesCount(): Observable<number> {
    return this.http.get<number>('/api/enrolled-courses-count'); // Adjust the endpoint as needed
  }

  getPendingApprovalsCount(): Observable<number> {
    return this.http.get<number>('/api/pending-approvals-count'); // Adjust the endpoint as needed
  }

}
