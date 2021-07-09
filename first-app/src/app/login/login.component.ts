import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // email:String
  // password:String

  userLogin:FormGroup

  constructor(private loginService:LoginService, private router:Router, private formBuilder:FormBuilder) {
    //Création d'un formulaire d'une façon réactive
    this.userLogin = this.formBuilder.group({
      email : new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$")])),
      password : new FormControl('',Validators.required)
    }) 
   }

  ngOnInit() {}

  logIn() {
    
    if(this.userLogin.status == "VALID") {
      if(this.loginService.logIn(this.userLogin.value.email, this.userLogin.value.password)) {
        this.router.navigate(['/person/form'])
      }
      else {
        alert("Erreur de connexion")
      }
    }
    else {
      alert("Erreur formulaire")
    }
    
  }

}
