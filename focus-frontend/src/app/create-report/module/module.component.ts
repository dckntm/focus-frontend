import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit { 
  value: {
    title: string,
    order: number,
  }

  CurrentOrder = 0;

  sections = [
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

  currOrder: number = this.sections[0].order;

  currentStyles: {};
  

  

  constructor() { }

  ngOnInit(): void {
  }

  addNewSection(){
    this.currOrder += 1;
    this.sections.push({title: 'новая секция', repeatable: false, order: this.currOrder, questions:[{questionText: "new question", inputType: 1}]})
    
  }

  addNewQuestion(index){
    this.sections[index].questions.push({questionText: "новый вопрос", inputType: 1});
  }

  changeRepeatableness(index){
    this.sections[index].repeatable = !this.sections[index].repeatable;
  }
  
}
