import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, AfterViewInit, Type, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ModuleComponent } from '../module/module.component';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements AfterViewInit {
  moduleComponents: Array<ModuleComponent> = [];
  state = {
    modules: [],
    currentModule: -1,
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

  constructor(private breakpointObserver: BreakpointObserver, private componentFactoryResolver: ComponentFactoryResolver, private render: Renderer2) {}

  

  addNewModule(){
    console.log(this.model);
    
    this.realSizeModules += 1;
    this.state.currentModule += 1;
    
    if(this.moduleComponents.length > 0){
      this.moduleComponents[this.state.currentModule - 1].currentStyles = {
        display: 'none',
      }
    }
    
    this.state.modules.push({value: 'Module' + this.realSizeModules});
    let moduleComponent = this.componentFactoryResolver.resolveComponentFactory( ModuleComponent );
    let moduleComponentRef = this.model.createComponent( moduleComponent );
    
    let NewItem = moduleComponentRef.instance;
    this.moduleComponents.push(NewItem);
    
    //set title of new module
    (<ModuleComponent>moduleComponentRef.instance).value = {
      title: 'Module'+this.realSizeModules,
    };

    //set style of new module
    // (<ModuleComponent>moduleComponentRef.instance).currentStyles = {
    //   display: 'none'
    // }
    
    console.log(this.state.currentModule)
    console.log('Module added');
    console.log(this.state.modules);
    console.log("current module is " + this.state.currentModule);
    console.log(this.moduleComponents);
  }

  setModule(value){
    this.moduleComponents[this.state.currentModule].currentStyles = {
      display: 'none',
    }
    this.state.currentModule = value;
    this.moduleComponents[value].currentStyles = {
      display: 'block',
    }
    console.log("current module is "+this.state.currentModule);
    console.log(this.model)
  }
  
}
