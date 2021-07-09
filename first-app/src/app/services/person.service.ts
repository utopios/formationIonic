import { Injectable } from "@angular/core";
import { Person } from "../interfaces/person.interface";

@Injectable()
export class PersonService {
    persons:Array<Person> = [{firstName : 'tata', lastName:'toto', email:'toto@tata'}]

    addPerson(person:Person) {
        this.persons.push(person)
    }

    getPersonById(id:number):Person {
        return this.persons[id]
    }
}