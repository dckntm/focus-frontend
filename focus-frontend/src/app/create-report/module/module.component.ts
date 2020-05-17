import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servises/authentication.service';

export enum Types {
  ShortText = 0,
  LongText,
  Email,
  PhoneNumber,
  Label, // forbidden
  Integer,
  Decimal,
  Financial,
  MultipleChoiceOptionList, // forbidden
  SingleOptionSelect, // forbidden 
  Boolean
}

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})



export class ModuleComponent implements AfterViewInit { 
  value: {
    title: string,
    order: number,
  }

  keys: any;
  types = Types;

  

  

  CurrentOrder = 0;

  questionnaire = {
    title: 'Название модуля',
    order: 0,
    sections: [
      {
        title: '1 секция',
        order: 0,
        questions:[
          { 
            questionText: "1 вопрос",
            inputType: Types,
            order: 0,
          }
        ]
      }
    ]
  };
  

  currOrder: number = this.questionnaire.sections[0].order;

  currentStyles: {};

  constructor() {
    this.keys = Object.keys(this.types).filter(k => !isNaN(Number(k)));
  }

  ngAfterViewInit(): void{
    this.questionnaire.title = this.questionnaire.title;
    this.questionnaire.order = this.value.order;
  }

  addNewSection(){
    this.currOrder += 1;
    this.questionnaire.sections.push({title: 'новая секция', order: this.currOrder, questions:[{questionText: "new question", inputType: this.types, order: 0}]})
    
  }

  addNewQuestion(index){
    questOrder: 0;
    this.questionnaire.sections[index].questions.push({questionText: "Новый вопрос", inputType: this.types, order: this.questionnaire.sections[index].questions.length});
  }

  onChange(type) {
    console.log(this.questionnaire.sections[0].questions[0].inputType)
  }
  
}
