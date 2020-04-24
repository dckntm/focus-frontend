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

  types = [1];

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
            inputType: this.types[0],
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
    this.questionnaire.sections.push({title: 'новая секция', repeatable: false, order: this.currOrder, questions:[{questionText: "new question", inputType: this.types[0]}]})
    
  }

  addNewQuestion(index){
    this.questionnaire.sections[index].questions.push({questionText: "Новый вопрос", inputType: this.types[0]});
  }

  changeRepeatableness(index){
    this.questionnaire.sections[index].repeatable = !this.questionnaire.sections[index].repeatable;
    console.log(this.questionnaire.sections[index].repeatable)
  }

  
   selectedType = this.types[0];

   onChange(type) {
     console.log(this.questionnaire.sections[0].questions[0].inputType)
  }
  
}
