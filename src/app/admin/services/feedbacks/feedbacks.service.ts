import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeedbacksService {
  private apiUrl = 'http://localhost:8080/instalearn/admin/feedbacks/list';

  constructor(private http: HttpClient) {}

  getFeedbacks() {
    console.log('Inside getting it');
    return this.http.get(this.apiUrl);
  }
}
