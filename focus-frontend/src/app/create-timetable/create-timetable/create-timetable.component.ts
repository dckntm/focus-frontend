import { Component, OnInit } from '@angular/core';
import { CreateTimetableService } from '../../servises/create-timetable.service';

@Component({
  selector: 'app-create-timetable',
  templateUrl: './create-timetable.component.html',
  styleUrls: ['./create-timetable.component.scss']
})
export class CreateTimetableComponent implements OnInit {

  constructor() { }

  timetable = {
    template: '',
    repeatable: false,
    deadline: '',
  }

  templates = [{'type': '1 organisation'}, {'type': '2 organisation'}, {'type': '3 organisation'}];

  ngOnInit(): void {
  }

}
