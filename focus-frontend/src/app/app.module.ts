import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullPageComponent } from './create-report/full-page/full-page.component';
import { HeaderComponent } from './create-report/header/header.component';
import { ModuleListComponent } from './create-report/module-list/module-list.component';
import { ModuleComponent } from './create-report/module/module.component';


@NgModule({
  declarations: [
    AppComponent,
    FullPageComponent,
    HeaderComponent,
    ModuleListComponent,
    ModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
