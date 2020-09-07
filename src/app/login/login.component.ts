import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formData: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    })
  }


  signin() {
    const signinData = this.formData.value
    console.log('DADOS', signinData)
    /*
    this.jwtAuth.signin(signinData.email, signinData.password)
    .subscribe(response => {
      console.log('RESPONSE DO LOGIN DA PAGE LOGIN', response)
      //Terminar a lógica para efetuar o login e redirecionar para
      // a página de dashboard, arrumar depois.
    }, err => {
      console.log('erro')
    }) */
  }

}
