import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-composant-c',
  templateUrl: './composant-c.component.html',
  styleUrls: ['./composant-c.component.scss'],
})
export class ComposantCComponent implements OnInit {
  @Input() data:any
  constructor() { }

  ngOnInit() {}

}
