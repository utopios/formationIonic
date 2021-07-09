import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person.interface';


@Component({
  selector: 'app-item-person',
  templateUrl: './item-person.component.html',
  styleUrls: ['./item-person.component.scss'],
})
export class ItemPersonComponent implements OnInit {
  @Input() indexPerson:number
  @Input() person:Person
  constructor() { }

  ngOnInit() {}

}
