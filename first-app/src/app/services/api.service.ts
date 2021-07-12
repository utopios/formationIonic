import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { Person } from "../interfaces/person.interface";

Injectable({
    providedIn:'root'
})
export class ApiTestService {
    // urlBase:String = 'http://localhost:3000'
    // constructor(private httpClient:HttpClient) {
        
    // }
    
    // getPersons() {
    //     return this.httpClient.get(`${this.urlBase}/persons`)
    // }

    // getPersonById(id:number) {
    //     return this.httpClient.get(`${this.urlBase}/person/${id}`)
    // }

    // postPerson(person:Person) {
    //     return this.httpClient.post(`${this.urlBase}/person`,person)
    // }
}