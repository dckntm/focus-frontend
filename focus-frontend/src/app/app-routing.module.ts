import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from '../app/create-report/modules/modules.component';
import { ModuleComponent } from '../app/create-report/module/module.component';
import { CreateTimetableComponent } from '../app/create-timetable/create-timetable/create-timetable.component'

import { AuthComponent } from '../app/auth/auth.component'
import { TimetableListPageComponent } from './timetable-list/timetable-list-page/timetable-list-page.component';
import { OrganisationsListPageComponent } from '../app/organizations-list/organisations-list-page/organisations-list-page.component'
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateOrgComponent } from './create-org/create-org.component';
import { ReportPageComponent } from './report/report-page/report-page.component';
import { ReportListPageComponent } from '../app/report-list/report-list-page/report-list-page.component'
import { NavLinksComponent } from './nav-page/nav-links/nav-links.component';
import { AdminReportsListComponent } from './admin-reports/admin-reports-list/admin-reports-list.component';
import { AdminActivate } from './auth/admin.activate';
import { UserActivate } from './auth/user.activate';


const routes: Routes = [
  {path: 'create-report', component: ModulesComponent, canActivate: [AdminActivate, UserActivate]},
  {path: 'timetable', component: CreateTimetableComponent, canActivate: [AdminActivate, UserActivate]},
  {path: '', component: AuthComponent},
  {path: 'timetable-list', component: TimetableListPageComponent, canActivate: [AdminActivate, UserActivate]},
  {path: 'organizations', component: OrganisationsListPageComponent, canActivate: [AdminActivate, UserActivate]},
  {path: 'c-u', component: CreateUserComponent, canActivate: [AdminActivate, UserActivate]},
  {path: 'c-o', component: CreateOrgComponent, canActivate: [AdminActivate, UserActivate]},
  {path: 'report/:reportId', component: ReportPageComponent, canActivate: [UserActivate]},
  {path: 'report-list', component: ReportListPageComponent, canActivate: [UserActivate]},
  {path: 'navigation', component: NavLinksComponent, canActivate: [AdminActivate]},
  {path: 'admin-reports', component: AdminReportsListComponent, canActivate: [AdminActivate]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
