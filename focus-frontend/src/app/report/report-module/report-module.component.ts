import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../../models/module';

@Component({
  selector: 'app-report-module',
  templateUrl: './report-module.component.html',
  styleUrls: ['./report-module.component.scss']
})
export class ReportModuleComponent implements OnInit {
  questionnaire: Questionnaire;
  currentStyles: {};

  constructor() { }

  ngOnInit(): void {
    console.log(this.questionnaire)
  }

  initQuestionnaireData(q:Questionnaire){
    this.questionnaire = q;
    console.log(this.questionnaire);
  }

  getQuestionnaireData() : Questionnaire {
    // returns current state of questionnaire
    return this.questionnaire;
  }

  onChange(answer){
    console.log(this.questionnaire)


  }
}
