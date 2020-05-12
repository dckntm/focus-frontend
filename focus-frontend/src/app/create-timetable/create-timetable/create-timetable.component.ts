import { Component, OnInit } from '@angular/core';
import { CreateTimetableService } from '../../servises/create-timetable.service';
import { SimpleOrganization } from 'src/app/models/simple-organisation';
import { Template } from '../../models/templates';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-timetable',
  templateUrl: './create-timetable.component.html',
  styleUrls: ['./create-timetable.component.scss']
})
export class CreateTimetableComponent implements OnInit {
  organizations$: Observable<SimpleOrganization[]>;
  templates$: Observable<Template[]>;

  constructor(private pageService: CreateTimetableService) { }

  

  timetable = {
    id: '',
    reportTemplate: '',
    deadlinePeriod: '',
    emissionPeriod: '',
    emissionStart: '',
    emissionEnd: '',
    organizations: [{
      organization: '',
      isDelegatedToCOA: false,
      assignees: [{
        user: '',
        role: 0,
      }]
    }]
  }

  ngOnInit(): void {
    this.loadOrgsTemplates();
  }

  loadOrgsTemplates(){
    this.organizations$ = this.pageService.getOrganisations();
    this.templates$ = this.pageService.getTemplates();
  }

  onChange(type) {
    console.log(this.timetable)
  }

}
