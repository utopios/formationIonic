import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composant-a',
  templateUrl: './composant-a.component.html',
  styleUrls: ['./composant-a.component.scss'],
})
export class ComposantAComponent implements OnInit {
  data:any
  constructor() { }

  ngOnInit() {}

  methodeRecuperation(d:any) {
    this.data = d
  }

}
