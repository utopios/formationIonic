import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userRegister:FormGroup
  isSubmit:Boolean = false
  constructor(private formBuilder:FormBuilder, private loginService:LoginService, private router:Router) { 
    this.userRegister =this.formBuilder.group({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })
  }


  validRegistration() {
    this.isSubmit = true
    if(this.userRegister.valid) {
        this.loginService.addUser(this.userRegister.value.email, this.userRegister.value.password)
        this.isSubmit = false
        this.router.navigate(['/login'])
    }
    else {
      alert("Erreur formulaire")
    }
  }

  ngOnInit() {}

}
