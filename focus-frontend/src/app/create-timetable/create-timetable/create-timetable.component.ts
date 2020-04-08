import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-timetable',
  templateUrl: './create-timetable.component.html',
  styleUrls: ['./create-timetable.component.scss']
})
export class CreateTimetableComponent implements OnInit {

  constructor() { }

  templates = [{'type': '1 organisation'}, {'type': '2 organisation'}, {'type': '3 organisation'}];

  ngOnInit(): void {
  }

}
