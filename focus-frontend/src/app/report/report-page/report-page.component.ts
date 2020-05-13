import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/servises/report.service';
import { ReportModuleComponent } from '../report-module/report-module.component';
import { Questionnaire } from 'src/app/models/module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {
  dataR: Report;
  report$: Observable<Report>;
  reportId: string;
  moduleComponents: Array<ReportModuleComponent> = [];
  currentModule = -1;
  title: string;
  

  @ViewChild('model', {read: ViewContainerRef}) private model: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  

  constructor(private breakpointObserver: BreakpointObserver, private pageService: ReportService, private componentFactoryResolver: ComponentFactoryResolver, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.reportId = 
        params["reportId"]
    })
  }

  ngOnInit(){
    this.pageService.getReport(this.reportId).subscribe(x => this.processReport(x));
    
  }

  createModules(_questionnaire: Questionnaire){
    this.currentModule = this.moduleComponents.length;
    let moduleComponent = this.componentFactoryResolver.resolveComponentFactory( ReportModuleComponent );
    let moduleComponentRef = this.model.createComponent( moduleComponent );
    let NewItem = moduleComponentRef.instance;
    this.moduleComponents.push(NewItem);
  
    moduleComponentRef.instance.initQuestionnaireData(_questionnaire);
    moduleComponentRef.instance.currentStyles={
      display: 'none',
    }
    console.log(this.currentModule)
  }

  processReport(report:Report){
    this.dataR = report;
    console.log(this.dataR)

    this.title = this.dataR.title

    this.dataR.questionnaireAnswers.forEach(questionnaire => {
      this.createModules(questionnaire);
      
    });
  }

  composeDataForSending(){
    var questionnaires = [];

    this.moduleComponents.forEach(q => {
      questionnaires.push(q.getQuestionnaireData())
    });

    return {
      id: this.reportId,
      questionnaireAnswers: questionnaires,
      tableAnswers: []
    };
  }

  passReport() {
    console.log("passed")
    // api/report/pass
    this.pageService.passReport(this.composeDataForSending());
    this.router.navigateByUrl('report-list', { skipLocationChange: true});
  }
  
  saveReport(){
    console.log("saved")
    // api/report/save
    this.pageService.saveReport(this.composeDataForSending());
    this.router.navigateByUrl('report-list', { skipLocationChange: true});
    // this.router.navigate("/reports");
  }

  setModule(value){
    //clear current module
    this.moduleComponents[this.currentModule].currentStyles = {
      display: 'none',
    }

    console.log(value);

    //show current module
    this.currentModule = value;
    this.moduleComponents[value].currentStyles = {
      display: 'block',
    }
    

  }

}
