import { Component, OnInit } from '@angular/core';
import { CreateTimetableService } from '../../servises/create-timetable.service';
import { SimpleOrganization } from 'src/app/models/simple-organisation';
import { Template } from '../../models/templates';
import { Observable } from 'rxjs';

class Org {
  id:string;
  title:string;
  picked:boolean;
}

@Component({
  selector: 'app-create-timetable',
  templateUrl: './create-timetable.component.html',
  styleUrls: ['./create-timetable.component.scss']
})
export class CreateTimetableComponent implements OnInit {
  organizations$: Observable<SimpleOrganization[]>;
  templates$: Observable<Template[]>;
  deadline: string;
  period: string;
  emissionStart: Date ;
  emissionEnd: Date;
  scheduleState: boolean;

  

  constructor(private pageService: CreateTimetableService) { }

  

  timetable = {
    id: '',
    reportTemplate: '',
    deadlinePeriod: {
      days: 0,
      months: 0,
      years: 0,
    },
    emissionPeriod: {
      days: 0,
      months: 0,
      years: 0,
    },
    emissionStart: '',
    emissionEnd: '',
    organizations: []
  }

  orgSelect: Org[] = new Array();
  organizations: SimpleOrganization[];

  processOrgs(orgs:SimpleOrganization[]){
    this.organizations = orgs;

    orgs.forEach(org => {
      this.orgSelect.push({id: org.id, title: org.title, picked: false});
    });
    console.log(this.orgSelect)
  }


  ngOnInit(): void {
    this.loadOrgs();
    this.loadTemplates();
  }



  loadOrgs(){
    this.pageService.getOrganisations().subscribe(x => this.processOrgs(x));
    
  }

  loadTemplates(){
    this.templates$ = this.pageService.getTemplates();
  }

  onChange() {
    if(this.scheduleState){
    this.currentStyles = {
      display: 'none',
    }}else{
      this.currentStyles = {
        display: 'block',
      }
    }
    console.log(this.scheduleState)
  }

  currentStyles: {};

  createTimetable(){
    this.timetable.deadlinePeriod.days = +this.deadline;
    this.timetable.emissionPeriod.days = +this.period;

    if (this.scheduleState){
      this.timetable.emissionPeriod.days = 0;
    }

    this.orgSelect.forEach((org) => {
      if(org.picked){
        this.timetable.organizations.push(org.id);
      }
    })

    if (this.scheduleState)
    {
      this.pageService.postTimetable(this.timetable);
    } else {
      this.pageService.counstructReport(this.timetable);
    }
    console.log(this.timetable);
    console.log(this.orgSelect)
  }

  change() {
    
  }

  
}
