import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  paramsId:any
  paramsName:any
  //Le service router contient des fonctionnalités pour agir sur la navigation
  constructor(private router:Router) { }

  ngOnInit() {}

  redirectAction() {
    //logique métier

    //La redirection vers demo-bis
    this.router.navigate([`/bis/${this.paramsId}/${this.paramsName}`])
  }

}
