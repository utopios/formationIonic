import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";

Injectable()
export class ApiService {
    urlBase:String = 'http://localhost:3000'
    constructor(private httpClient:HttpClient) {
        console.log(this.httpClient)
    }
    
    getPersons() {
        return this.httpClient.get(`${this.urlBase}/persons`)
    }

    getPersonById(id:number) {
        return this.httpClient.get(`${this.urlBase}/person/${id}`)
    }
}