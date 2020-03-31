import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from '../app/create-report/modules/modules.component';
import { ModuleComponent } from '../app/create-report/module/module.component';


const routes: Routes = [
  {path: '',
   component: ModulesComponent,
   children: [{
     path: '1module',
     component: ModuleComponent,
   },
   {
     path: '2module',
     component: ModuleComponent,
   }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
