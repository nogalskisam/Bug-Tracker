import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';

import { Bug } from '../models/bug.model';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  private headers: HttpHeaders;
  private bugApiUri: string = 'http://localhost:51188/api/bugs'

  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getBugs() {
    return this.http.get(this.bugApiUri + '/true');
  }
}
