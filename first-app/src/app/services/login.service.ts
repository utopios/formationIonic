import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    isLogged = false
    users = [
        {
            email : 'toto@tata.fr',
            password : '1234567'
        }
    ]
    getIsLogged() {
        return this.isLogged
    }

    logIn(email:String, password:String) {
        console.log(email)
        console.log(password)
        const user = this.users.find(u => u.email == email && u.password == password)
        console.log(user)
        this.isLogged = user != undefined
        return this.isLogged
    }
}