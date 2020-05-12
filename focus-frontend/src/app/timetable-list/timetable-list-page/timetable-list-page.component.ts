import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timetable-list-page',
  templateUrl: './timetable-list-page.component.html',
  styleUrls: ['./timetable-list-page.component.scss']
})
export class TimetableListPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  

}
