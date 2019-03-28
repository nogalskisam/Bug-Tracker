import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';

import { Bug } from '../models/bug.model';
import { BugRequest } from '../models/requests/bug-request.model';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  private headers: HttpHeaders;
  private bugApiUri: string = 'http://localhost:55810/api/bugs'

  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getBugs() {
    return this.http.get(this.bugApiUri + '/true');
  }

  public createBug(request: BugRequest) {
    return this.http.post(this.bugApiUri, request);
  }
}
