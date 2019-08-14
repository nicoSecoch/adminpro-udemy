import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgressComponent } from './components/progress/progress.component';
import { Graficas1Component } from './components/graficas1/graficas1.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { APP_RPUTES } from './app.routes';
import { PagesComponent } from './components/pages.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    PagesComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_RPUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
