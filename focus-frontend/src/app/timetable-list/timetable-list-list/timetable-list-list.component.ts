import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleTimetable } from 'src/app/models/simple-timetable';
import { ActivatedRoute, Router } from '@angular/router';
import { TimetableListService } from 'src/app/servises/timetable-list.service';

@Component({
  selector: 'app-timetable-list-list',
  templateUrl: './timetable-list-list.component.html',
  styleUrls: ['./timetable-list-list.component.scss']
})
export class TimetableListListComponent implements OnInit {
  SimpleTimetables$: Observable<SimpleTimetable[]>


  constructor(private pageService: TimetableListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadTimetables();

    this.SimpleTimetables$.subscribe(x => console.log(x));
  }

  goCreateTimetable(){
    this.router.navigate(["/timetable"])
  }


  loadTimetables(){
    this.SimpleTimetables$ = this.pageService.getOrganisations();
  }
}
