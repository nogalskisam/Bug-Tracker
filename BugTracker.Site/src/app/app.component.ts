import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Bug Tracker';
  public apiAvailability: boolean = false;
  private apiUri: string;

  /**
   *
   */
  constructor() {
    this.apiUri = "";
  }

  public testApi() {
    this.apiAvailability = true;
  }
}
