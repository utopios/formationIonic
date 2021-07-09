import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-bis',
  templateUrl: './demo-bis.component.html',
  styleUrls: ['./demo-bis.component.scss'],
})
export class DemoBisComponent implements OnInit {
  paramsFromRoute:any
  paramsFromRouteName:any
  //Le service activatedRoute permet de récupérer des informations sur la route cible
  constructor(private route:ActivatedRoute) {
    //l'objet route possède un snapshot qui contient les paramètres de la route
    if(this.route.snapshot.params.id != undefined) 
      this.paramsFromRoute = this.route.snapshot.params.id
    if(this.route.snapshot.params.name != undefined)
      this.paramsFromRouteName = this.route.snapshot.params.name
  }

  ngOnInit() {}

}
