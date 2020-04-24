import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from '../app/create-report/modules/modules.component';
import { ModuleComponent } from '../app/create-report/module/module.component';
import { CreateTimetableComponent } from '../app/create-timetable/create-timetable/create-timetable.component'
import { AuthComponent } from '../app/auth/auth.component'

const routes: Routes = [
  {path: '', component: ModulesComponent},
  {path: 'timetable', component: CreateTimetableComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
