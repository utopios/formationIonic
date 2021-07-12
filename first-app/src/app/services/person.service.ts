import { Injectable } from "@angular/core";
import { Person } from "../interfaces/person.interface";

@Injectable()
export class PersonService {
    persons:Array<Person> = [{firstName : 'tata', lastName:'toto', email:'toto@tata'}]

    addPerson(person:Person) {
        this.persons.push(person)
    }

    getPersons() {
        //Tâche qui prend beaucoup de temps à être exécuter
        //promise
        return new Promise((resolve, reject)=> {
            //Tâche qui prend du temps sera exécuter à l'intétieur de la promise
            setTimeout(()=> {
                resolve(this.persons)
            },3000)    
        })
        //return this.persons
    }

    //Récupèrer la personne par son id à l'aide d'une promise
    getPersonById(id:number):Promise<Person> {
        return new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve(this.persons[id])
            },3000)
        })    
    }
}