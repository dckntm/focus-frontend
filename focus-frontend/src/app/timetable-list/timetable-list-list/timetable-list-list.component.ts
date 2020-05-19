import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleTimetable } from 'src/app/models/simple-timetable';
import { ActivatedRoute, Router } from '@angular/router';
import { TimetableListService } from 'src/app/servises/timetable-list.service';
import { SimpleOrganization } from 'src/app/models/simple-organisation';
import { Template } from '../../models/templates';

class Schedule{
  template: string;
  organizatins: string[];
  deadlinePeriod: string;
  id: string;
}

@Component({
  selector: 'app-timetable-list-list',
  templateUrl: './timetable-list-list.component.html',
  styleUrls: ['./timetable-list-list.component.scss']
})
export class TimetableListListComponent implements OnInit {
  SimpleTimetables$: Observable<SimpleTimetable[]>
  orgs: SimpleOrganization[];
  templates: Template[];
  timetables: SimpleTimetable[];
  schedules: Schedule[] = [];
   

  constructor(private pageService: TimetableListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.loadTimetables();

    
    
    this.pageService.getOrganisations().subscribe(schedules => {
      console.log(schedules);
      console.log("we get schedules")
      this.pageService.getTemplates().subscribe(templates => {
        console.log(templates)
        this.pageService.getOrgs().subscribe(orgs => {
          console.log(orgs)
          
          
          schedules.forEach(sched => {
            let newShedule = new Schedule;
            newShedule.organizatins = []
            templates.forEach(temp => {
              if(temp.id == sched.reportTemplate){
                console.log("sucess")
                newShedule.template = temp.title;
              }
            })
            orgs.forEach(org => {
              sched.organizations.forEach(organ => {
                if(org.id == organ){
                  newShedule.organizatins.push(org.title)
                }
              })
            })
            this.schedules.push(newShedule);
            console.log(newShedule);
            console.log(this.schedules)
          })
          console.log("its ready shit")
          console.log(this.schedules);
        });
      });

    });
    
    
  }

  // timetableDecode(arr: SimpleTimetable[]){
  //   this.timetables = arr;
  //   console.log(this.timetables);
  //   this.timetables.forEach(timetable => {
  //     timetable.organizations.forEach(org => {
  //       this.orgs.forEach(organization => {
  //         if()
  //       })
  //     })
  //   })
  // }

  orgDecode(arr: SimpleOrganization[]){
    this.orgs = arr;
    console.log(this.orgs)
  }

  tempDecode(arr: Template[]){
    this.templates = arr;
    console.log(this.templates)
  }

  goCreateTimetable(){
    this.router.navigate(["/timetable"])
  }


  loadTimetables(){
    this.SimpleTimetables$ = this.pageService.getOrganisations();
  }
}
