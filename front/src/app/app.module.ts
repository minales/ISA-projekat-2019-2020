import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './component/users/loginRegistration/login/login.component';
import { RegistracijaComponent } from './component/users/loginRegistration/registration/registration.component';
import { ProfilComponent } from './component/users/viewConfig/profil/profil.component';
import { PromeniLozinkuComponent } from './component/users/password/password-change/password-change.component';



const appRoutes: Routes = [
  /*{ path: 'record/:id', component: RecordDetailsComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },*/



  //---------------------------------------------korisnicka podesavanja
  { path: 'profil', component: ProfilComponent },

  //-----------------------------------------------login i registracija
  { path: 'login', component: LoginComponent },
  { path: 'registracija', component: RegistracijaComponent },
  { path: 'promeniLozinku', component: PromeniLozinkuComponent },


];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistracijaComponent,
    ProfilComponent,
    PromenaLozinkeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true } 
    )
  ],
  providers: [ //registrujem servise obaveznoo!!!!!!
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

