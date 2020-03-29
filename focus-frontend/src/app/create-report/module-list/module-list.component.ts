import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ModuleComponent } from '../module/module.component';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
  @ViewChild('model', {read: ViewContainerRef}) private model: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {  
  }

  ngOnInit(): void {
  }

  addNewModule(){
    let moduleComponent = this.componentFactoryResolver.resolveComponentFactory( ModuleComponent );
    let moduleComponentRef = this.model.createComponent( moduleComponent );
  }

}
