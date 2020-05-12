import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goReports(){
    this.router.navigate(["/report-list"])
  }

  goOrganizations(){
    this.router.navigate(["/organizations"])
  }

  goTimetables(){
    this.router.navigate(["/timetable-list"])
  }
}
