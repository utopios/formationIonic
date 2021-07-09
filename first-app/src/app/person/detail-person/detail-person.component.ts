import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.scss'],
})
export class DetailPersonComponent implements OnInit {
  index:number
  person:Person
  constructor(private personService:PersonService, private activatedRoute:ActivatedRoute) { 
    this.index = this.activatedRoute.snapshot.params.id
    if(this.index != undefined) {
      this.person = this.personService.getPersonById(this.index)
    }
  }

  ngOnInit() {}

}
