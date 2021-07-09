import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu-person',
  templateUrl: './menu-person.component.html',
  styleUrls: ['./menu-person.component.scss'],
})
export class MenuPersonComponent implements OnInit {

  @Output() eventMenuChange : EventEmitter<String> = new EventEmitter()

  constructor() { }

  ngOnInit() {}

  changeMenu(menu) {
    console.log(menu)
    this.eventMenuChange.emit(menu)
  }

}
