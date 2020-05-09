import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, Renderer2} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ModuleComponent } from '../module/module.component';
import { ReportTemplateService } from '../../servises/report-template.service';
import { Report } from 'src/app/models/reporet-template';



@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements AfterViewInit {
  //title of module
  title: string = 'report title';

  //styles of side buttons
  sideButtonStyles: {};


  //array of dynamic components
  moduleComponents: Array<ModuleComponent> = [];

  // report template for post to server
  report = {
    id: '',
    title: 'some text',
    questionnaires:[],
    tables: [],
  };

  //current state of page && titles of modules
  state = {
    modules: [],
    currentModule: -1,
  }
  
  realSizeModules = 0;

  //anstraction for dynamic creating components
  @ViewChild('model', {read: ViewContainerRef}) private model: any;


  //creating first module component during compilation
  ngAfterViewInit(){
    this.addNewModule();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private componentFactoryResolver: ComponentFactoryResolver, private render: Renderer2, private reportService: ReportTemplateService) {
  }


  //creating dynamic component
  addNewModule(){
    
    //set number of new module
    this.realSizeModules += 1;
    this.state.currentModule = this.moduleComponents.length;
    
    //clear others modules 
    if(this.moduleComponents.length > 0){
      for(let i = 0; i <= this.state.currentModule - 1; i++){
        this.moduleComponents[i].currentStyles = {
          display: 'none',
        }
      }     
    }
    
    //add new module to module list
    this.state.modules.push({value: 'Модуль ' + this.realSizeModules});

    //creating dynamic component
    let moduleComponent = this.componentFactoryResolver.resolveComponentFactory( ModuleComponent );
    let moduleComponentRef = this.model.createComponent( moduleComponent );
    
    //push new item to dynamic components array
    let NewItem = moduleComponentRef.instance;
    this.moduleComponents.push(NewItem);
    
    //set title of new module
    (<ModuleComponent>moduleComponentRef.instance).value = {
      title: 'Модуль '+this.realSizeModules,
      order: this.state.currentModule,
    };


  }

  //choosing module from module list
  setModule(value){
    //clear current module
    this.moduleComponents[this.state.currentModule].currentStyles = {
      display: 'none',
    }

    //show current module
    this.state.currentModule = value;
    this.moduleComponents[value].currentStyles = {
      display: 'block',
    }

  }

  //sending report to server
  postModule(){
    this.report.title = this.title;
    for(let i = 0; i < this.moduleComponents.length; i++){
      this.report.questionnaires.push(this.moduleComponents[i].questionnaire);
    }
    // this.reportService.postReport(this.report)


    console.log(JSON.stringify(this.report))
    
  }
  
}
