import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/interfaces/person.interface';
import { ApiTestService } from 'src/app/services/api.service';

import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss'],
})
export class ListPersonComponent implements OnInit {
  @Input() listPersons:Array<Person>
  refObservable:any
  constructor(private personService:PersonService, private apiService:ApiTestService, private httpClient:HttpClient, private router:Router) { 
    console.log("en cours de chargment....")
    // this.personService.getPersons().then((result:Array<Person>) => {
    //   this.listPersons = result
    // })
    
    // this.apiService.getPersons().subscribe((res:Array<Person>)=> {
    //   this.listPersons = res
    // })
    console.log("l'application continue")
    //this.listPersons = this.personService.getPersons()
  }

  ngOnInit() {
    console.log("component is init")
    
  }
  ionViewWillEnter(){
    console.log("view will enter")
  }
  ionViewDidEnter() {
    console.log("view did enter")
    this.refObservable = this.httpClient.get('http://localhost:3000/persons').subscribe((res:Array<Person>) => {
      this.listPersons = res
    })
  }

  ionViewWillLeave() {
    console.log("View will leave")
    this.refObservable.unsubscribe()
  }
  ionViewDidLeave() {
    console.log("View did leave")
  }

  goToForm() {
    this.router.navigate(['/person/form'])
  }
}
