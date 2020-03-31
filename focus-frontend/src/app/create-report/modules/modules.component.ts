import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ModuleComponent } from '../module/module.component';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements AfterViewInit {
  
  state = {
    modules: [],
    currentModule: '',
  }
  
  realSizeModules = 0;

  @ViewChild('model', {read: ViewContainerRef}) private model: any;
  ngAfterViewInit(){
    this.addNewModule();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private componentFactoryResolver: ComponentFactoryResolver,) {}

  addNewModule(){
    this.realSizeModules += 1;
    this.state.modules.push({value: 'Module' + this.realSizeModules})
    this.model.clear();
    let moduleComponent = this.componentFactoryResolver.resolveComponentFactory( ModuleComponent );
    let moduleComponentRef = this.model.createComponent( moduleComponent );
    (<ModuleComponent>moduleComponentRef.instance).value = {
      title: 'Module'+this.realSizeModules,
    };
    this.state.currentModule = 'Module'+this.realSizeModules;
    console.log(this.state.modules);
    console.log(this.state.currentModule);
    console.log('Module added');
  }

  setModule(value){
    this.state.currentModule = value;
    console.log("current module is "+this.state.currentModule)
  }
  
}
