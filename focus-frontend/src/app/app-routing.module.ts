import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullPageComponent } from '../app/create-report/full-page/full-page.component'


const routes: Routes = [
  {path: '', component: FullPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
