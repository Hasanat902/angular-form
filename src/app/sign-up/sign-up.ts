import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customValidator } from './custom-validators';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  regForm = new FormGroup({
    userName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8),
      customValidator.noWhiteSpace,
    ]), customValidator.userExistAsync),
    email: new FormControl('', Validators.email),
    password: new FormControl('',  Validators.compose([
      Validators.required,
      Validators.minLength(8)
    ])),
  })

  signUp() {
    console.log(this.regForm.value, this.regForm);
  }
}
