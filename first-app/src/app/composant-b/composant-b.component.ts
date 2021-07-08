import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-composant-b',
  templateUrl: './composant-b.component.html',
  styleUrls: ['./composant-b.component.scss'],
})
export class ComposantBComponent implements OnInit {
  data:any
  //EventEmitter
  @Output() eventSendData:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {}

  sendData() {
    //On démarre l'event avec data comme paramètre
    this.eventSendData.emit(this.data)
  }
}
