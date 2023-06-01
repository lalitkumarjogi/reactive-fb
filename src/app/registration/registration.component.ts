import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  contactForm!:FormGroup
  constructor(private formBuilder:FormBuilder){

    this.contactForm=formBuilder.group({
      firstname: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      lastname: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      email: new FormControl('',[Validators.required,Validators.maxLength(254)]),
      phn: new FormControl('',[Validators.required,Validators.minLength(10)]),
      org: new FormControl('',[Validators.required,Validators.maxLength(1000)]),
      add: new FormControl('',[Validators.required,Validators.maxLength(1000)]),
      pass: new FormControl('',[Validators.required,Validators.minLength(16)]),
       date: new FormControl('',[Validators.required])

    })
  }

Onsub(){
console.log(this.contactForm.value)
}

Onres(){
  this.contactForm.reset()
}

    }


    
