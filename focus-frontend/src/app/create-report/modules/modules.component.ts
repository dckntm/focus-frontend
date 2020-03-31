import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ModuleComponent } from '../module/module.component';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  
  state = {
    modules: [],
    currentModule: 1,
  }
  
  realSizeModules = 0;

  @ViewChild('model', {read: ViewContainerRef}) private model: any;
  ngOnInit(){
    
  }




  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private componentFactoryResolver: ComponentFactoryResolver,) {}

  setTitle(){

  }

  addNewModule(){
    this.realSizeModules += 1;
    this.state.modules.push({value: 'Module' + this.realSizeModules})
    this.model.clear();
    let moduleComponent = this.componentFactoryResolver.resolveComponentFactory( ModuleComponent );
    let moduleComponentRef = this.model.createComponent( moduleComponent );
    (<ModuleComponent>moduleComponentRef.instance).value = {
      title: 'module'+this.realSizeModules,
    };
    console.log(this.realSizeModules)
    console.log('Module added')
  }

  
}
