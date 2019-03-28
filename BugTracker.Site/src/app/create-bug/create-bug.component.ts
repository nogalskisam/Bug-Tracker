import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {

  public title: string;
  public description: string;

  constructor() { }

  ngOnInit() {
  }

  public createBug(): void {
    // redirect to list page
  }
}
