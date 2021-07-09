import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    isLogged = false

    getIsLogged() {
        return this.isLogged
    }
}