import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { combineLatest, Observable, startWith, tap } from 'rxjs';
import { FormatPasswordPipe } from "../../../shared/pipes/format-password-tex.pipe";
import { Auth } from '../../../core/services/auth/auth';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink, FormsModule, CommonModule, FormatPasswordPipe],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword implements AfterViewInit {
  // Flags
  passwordMismatch = false;
  isUpdate = false;
  isUpdateMsg = false;
  typeOfInput =false
  // Initial data model for template binding
  confirmPasswordModel = {
    password: '',
    confirmPassword: '',
  };
  // Reference variable
  @ViewChild('password') passwordRef!:NgModel
  @ViewChild('confirmPassword') confirmPasswordRef!:NgModel


  constructor(private auth:Auth){}

  ngAfterViewInit(): void {
   if(this.passwordRef && this.confirmPasswordRef){
    const pass$ = this.passwordRef.valueChanges as Observable<string>
    const ConPass$ = this.confirmPasswordRef.valueChanges as Observable<string>

    combineLatest([pass$.pipe(startWith(this.confirmPasswordModel.password))
      ,ConPass$.pipe(startWith(this.confirmPasswordModel.confirmPassword))]).subscribe(([pass,confPass])=>{
       this.passwordMismatch = pass !==confPass;
      })
   }
  }



  // Handle form submission
  onSubmit(f: NgForm) {
    if (f.invalid || this.passwordMismatch) {
      return; // Prevent form submission if the form is invalid or passwords don't match
    } else {
      this.isUpdate = true;
      console.log('Password updated successfully!');
      // Handle further submission logic, like calling an API
    }
  }
  onSubmitPassword(f: NgForm) {
    if (f.invalid || this.passwordMismatch) {
      return; // Prevent form submission if the form is invalid or passwords don't match
    } else {
      this.isUpdateMsg = true;
      console.log('Password updated successfully!');

    }
  }


  togglePassword(){
    this.typeOfInput = !this.typeOfInput
  }
}
