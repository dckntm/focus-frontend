import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask'

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
import { TimetableListPageComponent } from './timetable-list/timetable-list-page/timetable-list-page.component';
import { TimetableListHeaderComponent } from './timetable-list/timetable-list-header/timetable-list-header.component';
import { TimetableListListComponent } from './timetable-list/timetable-list-list/timetable-list-list.component';
import { OrganisationsListPageComponent } from './organizations-list/organisations-list-page/organisations-list-page.component';
import { OrganisationsListHeaderComponent } from './organizations-list/organisations-list-header/organisations-list-header.component';
import { OrganisationsListListComponent } from './organizations-list/organisations-list-list/organisations-list-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateOrgComponent } from './create-org/create-org.component';
import { ReportModuleComponent } from './report/report-module/report-module.component';
import { ReportPageComponent } from './report/report-page/report-page.component';
import { ReportListPageComponent } from './report-list/report-list-page/report-list-page.component';
import { ReportListListComponent } from './report-list/report-list-list/report-list-list.component';
import { ReportListHeaderComponent } from './report-list/report-list-header/report-list-header.component';
import { jwtInterceptorProvider } from './auth/jwt.interceptor'
import { errorInterceptorProvider } from './auth/error.interceptor';
import { NavHeaderComponent } from './nav-page/nav-header/nav-header.component';
import { NavLinksComponent } from './nav-page/nav-links/nav-links.component';
import { TimetableHeaderComponent } from './create-timetable/timetable-header/timetable-header.component';
import { TextMaskModule } from 'angular2-text-mask';
import { AdminReportsHeaderComponent } from './admin-reports/admin-reports-header/admin-reports-header.component';
import { AdminReportsListComponent } from './admin-reports/admin-reports-list/admin-reports-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    ModulesComponent,
    CreateTimetableComponent,
    AuthComponent,
    TimetableListPageComponent,
    TimetableListHeaderComponent,
    TimetableListListComponent,
    OrganisationsListPageComponent,
    OrganisationsListHeaderComponent,
    OrganisationsListListComponent,
    CreateUserComponent,
    CreateOrgComponent,
    ReportModuleComponent,
    ReportPageComponent,
    ReportListPageComponent,
    ReportListListComponent,
    ReportListHeaderComponent,
    NavHeaderComponent,
    NavLinksComponent,
    TimetableHeaderComponent,
    AdminReportsHeaderComponent,
    AdminReportsListComponent,
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
    TextMaskModule,
  ],
  exports: [
    MatSidenavModule,
  ],
  providers: [jwtInterceptorProvider, errorInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
