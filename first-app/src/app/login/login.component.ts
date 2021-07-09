import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email:String
  password:String
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {}

  logIn() {
    if(this.loginService.logIn(this.email, this.password)) {
      this.router.navigate(['/person/form'])
    }
    else {
      alert("Erreur de connexion")
    }
  }

}
