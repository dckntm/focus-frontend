import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

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

  CurrentOrder = 0;

  questionnaire = {
    title: 'название секции',
    order: 0,
    sections: [
      {
        title: '1 секция',
        order: 1,
        repeatable: false,
        questions:[
          { 
            questionText: "1 вопрос",
            inputType: 1,
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
    this.questionnaire.sections.push({title: 'новая секция', repeatable: false, order: this.currOrder, questions:[{questionText: "new question", inputType: 1}]})
    
  }

  addNewQuestion(index){
    this.questionnaire.sections[index].questions.push({questionText: "новый вопрос", inputType: 1});
  }

  changeRepeatableness(index){
    this.questionnaire.sections[index].repeatable = !this.questionnaire.sections[index].repeatable;
  }
  
}
