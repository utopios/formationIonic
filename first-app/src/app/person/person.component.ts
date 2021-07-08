import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent{
  @Input()firstName:String
  @Input()lastName:String
  @Input() email:String
  displayForm:Boolean
  allInformation:String
  listPersons : Array<any>
  constructor() { 
    this.displayForm = false
    this.listPersons = []
  }

  // incrementAge() {
  //   this.age++
  // }

  confirmAllInformation() {
    this.allInformation = `${this.firstName} ${this.lastName} ${this.email}`
    this.listPersons.push({
      'firstName' : this.firstName,
      'lastName': this.lastName,
      'email': this.email
    })
    this.displayForm = false
    this.firstName = ""
    this.lastName = ""
    this.email = ""
  }

  switchFormulaire(isForm : boolean) {
    this.displayForm = isForm
  }

}
