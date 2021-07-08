import { Component } from '@angular/core';

//Une fonction sous forme d'annotations pour déclarer un composant.
//On a besoin de passer dans la fonction Component la configuration de notre component
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  //template:'<div><h1>Hello from our first component</h1></div>',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  firstName:String
  lastName:String
  //tableau de string
  listeString:Array<String>
  listeObject:Array<any>
  constructor() {
    this.firstName = "abadi"
    this.lastName = "ihab"
    this.listeString = ["titi","tata","toto", "minet"]
    this.listeObject =[
      {name : 'toto', id:1},
      {name : 'titi', id:2},
      {name : 'minet', id:3},
    ] 
  }

  addElement() {
    this.listeString.push("new element")
  }
}
