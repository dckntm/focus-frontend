import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullPageComponent } from './create-report/full-page/full-page.component';
import { HeaderComponent } from './create-report/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FullPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
