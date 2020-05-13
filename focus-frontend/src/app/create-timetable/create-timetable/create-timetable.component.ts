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

  public mask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]

  

  constructor(private pageService: CreateTimetableService) { }

  

  timetable = {
    id: '',
    reportTemplate: '',
    deadlinePeriod: '',
    emissionPeriod: '',
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
  }

  createTimetable(){
    this.timetable.deadlinePeriod = this.deadline + ".0.0";
    this.timetable.emissionPeriod = this.period + ".0.0";
    this.orgSelect.forEach((org) => {
      if(org.picked){
        this.addQuestionnare(org.title)
      }
    })
    this.pageService.postTimetable(this.timetable);
    console.log(this.timetable);
    console.log(this.orgSelect)
  }

  addQuestionnare(value: string){
    this.timetable.organizations.push({organization: value, isDelegatedToCOA: false, assignees:[{user: '', role: 0}]})
  }

  change() {
    
  }

  
}
