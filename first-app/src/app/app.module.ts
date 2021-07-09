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
import { DemoModule } from './demo/demo.module';
import { PersonModule } from './person/person.module';

import { PersonService } from './services/person.service';


//Une fonction qui permet de déclarer une classe comme un module angular, cette fonction prend comme params un objet
//params => la configuration du module
@NgModule({
  //On déclare les composants du modules
  declarations: [AppComponent, ComposantAComponent, ComposantBComponent, ComposantCComponent],
  entryComponents: [],
  //On importe les sous modules
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule, PersonModule],
  //On indique les services du modules
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, PersonService],
  //Le composant principal du module
  bootstrap: [AppComponent],
})
//Déclaration du module principal
export class AppModule {}
