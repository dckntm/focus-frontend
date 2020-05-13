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


const routes: Routes = [
  {path: 'create-report', component: ModulesComponent},
  {path: 'timetable', component: CreateTimetableComponent},
  {path: '', component: AuthComponent},
  {path: 'timetable-list', component: TimetableListPageComponent},
  {path: 'organizations', component: OrganisationsListPageComponent},
  {path: 'c-u', component: CreateUserComponent},
  {path: 'c-o', component: CreateOrgComponent},
  {path: 'report/:reportId', component: ReportPageComponent},
  {path: 'report-list', component: ReportListPageComponent},
  {path: 'navigation', component: NavLinksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
