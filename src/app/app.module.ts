import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { APP_RPUTES } from './app.routes';
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './components/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_RPUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
