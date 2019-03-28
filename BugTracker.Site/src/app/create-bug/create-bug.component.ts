import { Component, OnInit } from '@angular/core';
import { BugRequest } from '../models/requests/bug-request.model';
import { BugService } from '../services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {

  public title: string;
  public description: string;

  public error: boolean = false;

  constructor(private bugService: BugService,
    private router: Router) { }

  ngOnInit() {
  }

  public createBug(): void {
    const request: BugRequest = {
      'title': this.title,
      'description': this.description
    };

    this.bugService.createBug(request).subscribe(() => {
      this.router.navigate(['']);
    }, error => {
      this.error = true;
    })
    // redirect to list page
  }
}
