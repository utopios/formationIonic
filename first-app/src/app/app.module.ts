import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantAComponent } from './composant-a/composant-a.component';
import { ComposantBComponent } from './composant-b/composant-b.component';
import { ComposantCComponent } from './composant-c/composant-c.component';
import { FormPersonComponent } from './form-person/form-person.component';
import { ItemPersonComponent } from './item-person/item-person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { MenuPersonComponent } from './menu-person/menu-person.component';
import { PersonComponent } from './person/person.component';


//Une fonction qui permet de déclarer une classe comme un module angular, cette fonction prend comme params un objet
//params => la configuration du module
@NgModule({
  //On déclare les composants du modules
  declarations: [AppComponent, PersonComponent, ComposantAComponent, ComposantBComponent, ComposantCComponent, ListPersonComponent, FormPersonComponent, ItemPersonComponent, MenuPersonComponent],
  entryComponents: [],
  //On importe les sous modules
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  //On indique les services du modules
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  //Le composant principal du module
  bootstrap: [AppComponent],
})
//Déclaration du module principal
export class AppModule {}
