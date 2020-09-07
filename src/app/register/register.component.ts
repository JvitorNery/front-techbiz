import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  public formData: FormGroup;

  ngOnInit() {
    this.formData = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null],
    });
  }

  onSubmit() {
    console.log(this.formData.value);
    this.formData.reset();
  }

}
