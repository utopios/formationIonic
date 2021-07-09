import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person.interface';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss'],
})
export class ListPersonComponent implements OnInit {
  @Input() listPersons:Array<Person>
  constructor(private personService:PersonService) { 
    this.listPersons = this.personService.persons
  }

  ngOnInit() {}

}
