import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../interfaces/person.interface';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent{
  // @Input()firstName:String
  // @Input()lastName:String
  // @Input() email:String
  // displayForm:Boolean
  // allInformation:String
  // listPersons : Array<any>

  menu:String
  listPersons : Array<Person>
  //On injecte un objet de type PersonService dans notre composant
  constructor(private personService:PersonService) { 
    // this.displayForm = false
    this.listPersons = this.personService.persons
  }

  // incrementAge() {
  //   this.age++
  // }

  // confirmAllInformation() {
  //   this.allInformation = `${this.firstName} ${this.lastName} ${this.email}`
  //   this.listPersons.push({
  //     'firstName' : this.firstName,
  //     'lastName': this.lastName,
  //     'email': this.email
  //   })
  //   this.displayForm = false
  //   this.firstName = ""
  //   this.lastName = ""
  //   this.email = ""
  // }

  // switchFormulaire(isForm : boolean) {
  //   this.displayForm = isForm
  // }

  changeMenu(val) {
    console.log(val)
    this.menu = val
  }

  addPerson(person:Person) {
    this.listPersons.push(person)
  }
}
