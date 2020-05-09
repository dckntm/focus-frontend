import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

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

  keys = Object.keys;
  types = Types;

  

  

  CurrentOrder = 0;

  questionnaire = {
    title: 'название секции',
    order: 0,
    sections: [
      {
        title: '1 секция',
        order: 1,
        questions:[
          { 
            questionText: "1 вопрос",
            inputType: Types,
          }
        ]
      }
    ]
  };
  

  currOrder: number = this.questionnaire.sections[0].order;

  currentStyles: {};
  

  

  constructor() { }

  ngAfterViewInit(): void{
    this.questionnaire.title = this.value.title;
    this.questionnaire.order = this.value.order;
  }

  addNewSection(){
    this.currOrder += 1;
    this.questionnaire.sections.push({title: 'новая секция', order: this.currOrder, questions:[{questionText: "new question", inputType: this.types}]})
    
  }

  addNewQuestion(index){
    this.questionnaire.sections[index].questions.push({questionText: "Новый вопрос", inputType: this.types});
  }
  
  selectedType = 0;

  onChange(type) {
    console.log(this.questionnaire.sections[0].questions[0].inputType)
  }
  
}
