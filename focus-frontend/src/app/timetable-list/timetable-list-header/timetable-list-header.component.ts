import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timetable-list-header',
  templateUrl: './timetable-list-header.component.html',
  styleUrls: ['./timetable-list-header.component.scss']
})
export class TimetableListHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goNav(){
    this.router.navigate(["/navigation"])
  }

}
