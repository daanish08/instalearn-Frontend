import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


export interface UserProfile {
  userName: string;
  email: string;
  phone: string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnInit{

   private apiUrl = '/api/user-profile';
   private fetchUserDetailsById='http://localhost:8080/instalearn/user/userList'


  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.apiUrl);
}
getUserById(id: number): Observable<UserProfile> {
  const url = `${this.fetchUserDetailsById}/${id}`;
  return this.http.get<UserProfile>(url);
}

}