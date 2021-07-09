import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../../interfaces/person.interface';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss'],
})
export class FormPersonComponent implements OnInit {
  firstName:String
  lastName:String
  email:String
  @Output() validPerson:EventEmitter<Person> = new EventEmitter()
  constructor(private personService:PersonService) { }

  ngOnInit() {}

  confirmForm() {
    const person:Person = {firstName:this.firstName, lastName:this.lastName, email:this.email}
    //this.validPerson.emit(person)
    this.personService.addPerson(person)
  }
}
