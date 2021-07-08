import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Une fonction qui permet de déclarer une classe comme un module angular, cette fonction prend comme params un objet
//params => la configuration du module
@NgModule({
  //On déclare les composants du modules
  declarations: [AppComponent],
  entryComponents: [],
  //On importe les sous modules
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  //On indique les services du modules
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  //Le composant principal du module
  bootstrap: [AppComponent],
})
//Déclaration du module principal
export class AppModule {}
