import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../core/services/auth/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%])/;
  toastMessage: string = '';
  toastType: string = 'info';
  toastVisible = false;
  constructor(private fb: FormBuilder, private auth: Auth,private router:Router) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(9), Validators.pattern(this.passwordRegex)],
      ],
    });
  }

  onSubmit() {
    const username = this.loginForm?.get('email')?.value;
    const password = this.loginForm?.get('password')?.value;

    // Call the authentication service's login method
    if (this.auth.login(username, password)) {
      // Navigate to the ProductListComponent upon successful login
      this.router.navigate(['/dashboard']);
      this.showToast('Login successful!', 'success');
    } else {
      this.showToast('Invalid username or password', 'error');
      // Handle authentication error (show error message, etc.)
    }


  }

   showToast(message: string, type: string = 'info') {
    this.toastMessage = message;
    this.toastType = type;
    this.toastVisible = true;

    setTimeout(() => {
      this.toastVisible = false;
    }, 3000);
  }
  f(formname: string) {
    return this.loginForm.get(formname);
  }
}
