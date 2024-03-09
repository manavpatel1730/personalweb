import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
form : any;
submitted = false;
success = false;
error = false;
message = '';


  constructor(public formBuilder : FormBuilder) { }

  ngOnInit() {
this.form = this.formBuilder.group({
  firstName: ['', Validators.required],
  lastName: ['', [Validators.required, Validators.email]],
  email: ['', Validators.required],
  phone: ['', Validators.required],
  Address: ['', Validators.required],
  City: ['', Validators.required],
  state: ['', Validators.required],
  checkOut: ['', Validators.required],


  });
}
}