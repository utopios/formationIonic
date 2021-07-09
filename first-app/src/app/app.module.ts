import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantAComponent } from './composant-a/composant-a.component';
import { ComposantBComponent } from './composant-b/composant-b.component';
import { ComposantCComponent } from './composant-c/composant-c.component';
import { DemoModule } from './demo/demo.module';
import { HomeAppComponent } from './home-app/home-app.component';
import { DetailPersonComponent } from './person/detail-person/detail-person.component';
import { FormPersonComponent } from './person/form-person/form-person.component';
import { ListPersonComponent } from './person/list-person/list-person.component';
import { PersonModule } from './person/person.module';

import { PersonService } from './services/person.service';

const routes:Routes = [
  {
    path : "",
    component: HomeAppComponent,
    pathMatch: 'full'
  },
  {
    path:"demo",
    pathMatch: 'full',
    loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule)
  }
]

//Une fonction qui permet de déclarer une classe comme un module angular, cette fonction prend comme params un objet
//params => la configuration du module
@NgModule({
  //On déclare les composants du modules
  declarations: [AppComponent, ComposantAComponent, ComposantBComponent, ComposantCComponent, HomeAppComponent],
  entryComponents: [],
  //On importe les sous modules
  imports: [BrowserModule, IonicModule.forRoot(), RouterModule.forRoot(routes), DemoModule, FormsModule, PersonModule],
  //On indique les services du modules
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, PersonService],
  //Le composant principal du module
  bootstrap: [AppComponent],
})
//Déclaration du module principal
export class AppModule {}
