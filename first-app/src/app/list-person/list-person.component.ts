import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../interfaces/person.interface';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss'],
})
export class ListPersonComponent implements OnInit {
  @Input() listPersons:Array<Person>
  constructor() { 
    this.listPersons = []
  }

  ngOnInit() {}

}
