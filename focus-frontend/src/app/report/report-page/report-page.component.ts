import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/servises/report.service';
import { ReportModuleComponent } from '../report-module/report-module.component';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {
  dataR: Report;
  report$: Observable<Report>;
  reportId: string;

  @ViewChild('model', {read: ViewContainerRef}) private model: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private pageService: ReportService, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(){
    this.report$ = this.pageService.getReport(this.reportId);
    this.transformData();
    for(let i = 0; i < this.dataR.questionnaireAnswers.length; i++){

    }
  }

  createModules(){
    let moduleComponent = this.componentFactoryResolver.resolveComponentFactory( ReportModuleComponent );
    let moduleComponentRef = this.model.createComponent( moduleComponent );
  }

  transformData(){
    this.report$.subscribe((data:Report)=>this.dataR = data);
  }

}
