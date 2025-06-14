import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TemplateForm } from './template-form/template-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, NgIf, TemplateForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  get name() {
    return this.profileForm.get('name');
  }

  get password() {
    return this.profileForm.get('password');
  }

  get email() {
    return this.profileForm.get('email');
  }
}
