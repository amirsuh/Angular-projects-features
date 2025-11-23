import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormatPasswordPipe } from "../../../shared/pipes/format-password-tex.pipe";

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, RouterLink, CommonModule, FormatPasswordPipe],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
signUpForm!:FormGroup
passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$]).{8,}/
isSubmitted = false
constructor(private fb:FormBuilder){
this.signUpForm = this.fb.group({
  fullName:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(8),Validators.pattern(this.passwordPattern)]],
  addressDetails: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required], // City as a FormControl
        state: ['', Validators.required], // State as a FormControl
        zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}(?:-[0-9]{6})?$')]]
      })
})
}
// Generic getter to access form controls easily
get f() {
  return this.signUpForm.controls;
}

// For nested addressDetails group
get address() {
  return (this.signUpForm.get('addressDetails') as FormGroup).controls;
}
onSubmit(){

}
}
