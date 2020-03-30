import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ModuleComponent } from '../module/module.component';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent {
  @ViewChild('model', {read: ViewContainerRef}) private model: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private componentFactoryResolver: ComponentFactoryResolver) {}

  addNewModule(){
    let moduleComponent = this.componentFactoryResolver.resolveComponentFactory( ModuleComponent );
    let moduleComponentRef = this.model.createComponent( moduleComponent );
  }
}
