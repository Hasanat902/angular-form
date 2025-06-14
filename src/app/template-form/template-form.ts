import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  userDetails: any;
  addDetails(val: NgForm) {
    console.log(val);
    this.userDetails = val;
  }
}
