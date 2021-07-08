import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../interfaces/person.interface';

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
  constructor() { }

  ngOnInit() {}

  confirmForm() {
    const person:Person = {firstName:this.firstName, lastName:this.lastName, email:this.email}
    this.validPerson.emit(person)
  }
}
