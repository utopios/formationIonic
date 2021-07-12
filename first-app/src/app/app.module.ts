import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantAComponent } from './composant-a/composant-a.component';
import { ComposantBComponent } from './composant-b/composant-b.component';
import { ComposantCComponent } from './composant-c/composant-c.component';
import { DemoModule } from './demo/demo.module';
import { HomeAppComponent } from './home-app/home-app.component';
import { LoginComponent } from './login/login.component';
import { DetailPersonComponent } from './person/detail-person/detail-person.component';
import { FormPersonComponent } from './person/form-person/form-person.component';
import { ListPersonComponent } from './person/list-person/list-person.component';
import { PersonModule } from './person/person.module';
import { RegisterComponent } from './register/register.component';
import { GuardService } from './services/guard.service';
import { LoginService } from './services/login.service';

import { PersonService } from './services/person.service';
import { ApiService } from './services/api.service';

const routes:Routes = [
  {
    path : "",
    component: HomeAppComponent,
  },
  {
    path : "login",
    component: LoginComponent,
  },
  {
    path : "register",
    component: RegisterComponent,
  },
  {
    path:"demo",
    loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule)
  },
  {
    path:"person",
    pathMatch: 'full',
    loadChildren: () => import('./person/person.module').then((m) => m.PersonModule)
  }
]

//Une fonction qui permet de déclarer une classe comme un module angular, cette fonction prend comme params un objet
//params => la configuration du module
@NgModule({
  //On déclare les composants du modules
  declarations: [AppComponent, ComposantAComponent, ComposantBComponent, ComposantCComponent, HomeAppComponent, LoginComponent, RegisterComponent],
  entryComponents: [],
  //On importe les sous modules
  imports: [BrowserModule, IonicModule.forRoot(), RouterModule.forRoot(routes), DemoModule, PersonModule, ReactiveFormsModule, HttpClientModule],
  //On indique les services du modules
  providers: [ PersonService, LoginService, GuardService, ApiService],
  //Le composant principal du module
  bootstrap: [AppComponent],
})
//Déclaration du module principal
export class AppModule {}
