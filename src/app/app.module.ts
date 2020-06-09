import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientComponent } from './list-client/list-client.component';
import { CrudClientComponent } from './crud-client/crud-client.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './services/client.service';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ContaminationComponent } from './contamination/contamination.component';
import { ContaminationService } from "./services/contamination.service";
import { ConmtaminationComponent } from './conmtamination/conmtamination.component';
import { CurdContaminationComponent } from './curd-contamination/curd-contamination.component';
import { SidBarComponent } from './sid-bar/sid-bar.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { MainComponent } from './main/main.component';
import { NombreParNiveauxService } from "./services/nombre-par-niveaux.service";
import { LoginHopiteComponent } from './login-hopite/login-hopite.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { NombreCasParSexeComponent } from './nombre-cas-par-sexe/nombre-cas-par-sexe.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MenuComponent } from './menu/menu.component';
import{UserLoginServiceService} from './services/user-login-service.service';
import { Home2Component } from './home2/home2.component'
@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    CrudClientComponent,
    ClientComponent,
    ContaminationComponent,
 
    ConmtaminationComponent,
 
    CurdContaminationComponent,
 
    SidBarComponent,
 
    CalendrierComponent,
 
    LoginBarComponent,
 
    DashboardComponent,
 
    PageNotFoudComponent,
 
    MainComponent,
 
    LoginHopiteComponent,
 
    DashboardHomeComponent,
 
    NombreCasParSexeComponent,
 
    UserLoginComponent,
 
    MenuComponent,
 
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ClientService,UserLoginServiceService,ContaminationService,NombreParNiveauxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
