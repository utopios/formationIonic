import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  paramsId:any
  paramsName:any
  message:any
  //Le service router contient des fonctionnalités pour agir sur la navigation
  constructor(private router:Router, private httpClient:HttpClient) { 
    //HttpClient est un service fournit par HttpClientModule, qui permet d'envoyer des requêtes http (POST, GET,...)
    //La méthode get envoie une observable => Récupération de plusieurs éléments.
    this.httpClient.get('http://localhost:3000').subscribe((res:any) => {
      this.message = res.message
    })
  }

  ngOnInit() {}

  redirectAction() {
    //logique métier
    this.httpClient.get(`http://localhost:3000/demo/${this.paramsName}`).subscribe((res:any)=> {
      console.log(res)
      this.router.navigate([`/demo/bis/${this.paramsId}/${this.paramsName}`])
    })
    //La redirection vers demo-bis
  }

}
