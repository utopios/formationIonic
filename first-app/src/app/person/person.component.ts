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
  age:number
  constructor() { 
    this.age = 0
    this.displayForm = false
  }

  incrementAge() {
    this.age++
  }

  confirmAllInformation() {
    this.allInformation = `${this.firstName} ${this.lastName} ${this.age} ${this.email}`
  }

  switchFormulaire() {
    this.displayForm = !this.displayForm
  }

}
