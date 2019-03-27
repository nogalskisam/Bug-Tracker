import { Component, OnInit } from '@angular/core';
import { BugService } from '../services/bug.service';
import { Bug } from '../models/bug.model';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {
  public bugs: Bug[];

  public getBugsError: boolean = false;
  public retrievedBugs: boolean = false;

  constructor(private bugService: BugService) { }

  ngOnInit() {
    this.getBugs();
  }

  public getBugs() {
    this.retrievedBugs = false;

    this.bugService.getBugs().subscribe((e: Bug[]) => {
      this.retrievedBugs = true;
      this.bugs = e;
    }, () => {
      this.getBugsError = true;
    })
  }
}
