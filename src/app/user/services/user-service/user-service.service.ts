import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../../utils/environment';

export interface UserProfile {
  userName: string;
  email: string;
  phone: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserServiceService implements OnInit {
  private apiUrl = '/api/user-profile';
  private fetchUserDetailsById = API_BASE_URL + '/user/userList';

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
