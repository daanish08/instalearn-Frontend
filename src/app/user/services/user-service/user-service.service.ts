import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
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
  private apiUrl = API_BASE_URL + '/api/user-profile';
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

  getUserName(id: number): Observable<string> {
    const url = `http://localhost:8080/instalearn/user/userList/${id}`;
    return this.http.get<string>(url).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      }),
    );
  }
}
