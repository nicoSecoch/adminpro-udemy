import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './components/progress/progress.component';
import { Graficas1Component } from './components/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './components/pages.component';
import { RegisterComponent } from './login/register.component';


const appRoutes :Routes = [
    {
        path: '',
        component: PagesComponent,
        children:[
            {path: 'dashboard',component: DashboardComponent},
            {path: 'progress',component: ProgressComponent},
            {path: '',redirectTo:'/dashboard',pathMatch: 'full'},
            {path: 'graficas1',component: Graficas1Component}
        ]
    },
    
    {path: 'login',component: LoginComponent},
    {path: 'register',component: RegisterComponent},
    
    //{path: '',redirectTo:'/pages',pathMatch: 'full'},
    {path: '**',component: NopagefoundComponent}
];

export const APP_RPUTES = RouterModule.forRoot(appRoutes, {useHash:true});