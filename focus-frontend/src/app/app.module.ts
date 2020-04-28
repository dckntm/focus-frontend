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
import { TimetableListPageComponent } from './timetable-list/timetable-list-page/timetable-list-page.component';
import { TimetableListHeaderComponent } from './timetable-list/timetable-list-header/timetable-list-header.component';
import { TimetableListListComponent } from './timetable-list/timetable-list-list/timetable-list-list.component';
import { OrganisationsListPageComponent } from './organizations-list/organisations-list-page/organisations-list-page.component';
import { OrganisationsListHeaderComponent } from './organizations-list/organisations-list-header/organisations-list-header.component';
import { OrganisationsListListComponent } from './organizations-list/organisations-list-list/organisations-list-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateOrgComponent } from './create-org/create-org.component';


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
