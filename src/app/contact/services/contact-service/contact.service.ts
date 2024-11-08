import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  handleAddFeedbacks(feedbackDetails: any): Observable<string> {
    return this.http.post<string>(
      'http://localhost:8080/instalearn/admin/feedbacks/add',
      feedbackDetails,
      // { responseType: 'text' as 'json' },
    );
  }
}
