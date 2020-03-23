import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { AddModuleService } from '../services/add-module.service'

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  constructor() {  
  }

  ngOnInit(): void {
  }

  addNewModule(@Inject(AddModuleService) service, @Inject(ViewContainerRef) ViewContainerRef){
    service.setRootViewContainerRef(ViewContainerRef);
    service.addModuleComponent();
  }

}
