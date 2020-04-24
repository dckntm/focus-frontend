import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleComponent } from './create-report/module/module.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulesComponent } from './create-report/modules/modules.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CreateTimetableComponent } from './create-timetable/create-timetable/create-timetable.component';
import { AuthComponent } from './auth/auth.component';
import { ReportListPageComponent } from './report-list/report-list-page/report-list-page.component';
import { ReportListListComponent } from './report-list/report-list-list/report-list-list.component';
import { ReportListHeaderComponent } from './report-list/report-list-header/report-list-header.component';


@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    ModulesComponent,
    CreateTimetableComponent,
    AuthComponent,
    ReportListPageComponent,
    ReportListListComponent,
    ReportListHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
