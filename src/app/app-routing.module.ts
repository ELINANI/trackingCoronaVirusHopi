import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ClientComponent } from './client/client.component';
import { ConmtaminationComponent } from './conmtamination/conmtamination.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginHopiteComponent } from './login-hopite/login-hopite.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { Home2Component } from './home2/home2.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {
    path :'',
    redirectTo :'login',
    pathMatch:'full'
  },
  {
    path :'login',
    component:UserLoginComponent,
    pathMatch :'full'
 },

  {
    path:"",
    component:MenuComponent,
    children:[
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path :'home',
        component:Home2Component,
        
      },
     
     {
      path :'dashboardHome',
      component :DashboardHomeComponent,
      
    },
    {
      path :'calendrier',
      component:CalendrierComponent,
     
    },
    {
      path:'client',
      component : ClientComponent,
     
    },
    {
      path:'contamination',
      component:ConmtaminationComponent,
      
    },
    {
      path:'dashboard',
      component:DashboardComponent,
      
    },

    ]


  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
