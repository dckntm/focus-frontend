import { Injectable, Inject, ComponentFactoryResolver} from '@angular/core';
import { ModuleComponent } from '../module/module.component'

@Injectable({
  providedIn: 'root'
})
export class AddModuleService {
  factoryResolver: any;
  rootViewContainer: any;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addModuleComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(ModuleComponent)
    const component = factory.create(this.rootViewContainer.parentInjector)
    this.rootViewContainer.insert(component.hostView)
  }
}
