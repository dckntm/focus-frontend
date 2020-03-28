import { Component, OnInit, Inject, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ModuleComponent } from '../module/module.component';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  constructor(private vf:ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {  
  }

  ngOnInit(): void {
  }

  addNewModule(){
    let resolver = this.componentFactoryResolver.resolveComponentFactory(ModuleComponent);
    let componentFactory = this.vf.createComponent(resolver);
  }

}
