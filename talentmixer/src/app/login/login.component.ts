import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginEmail: string = "";
  loginPassword: string = "";
  registerEmail: string = "";
  registerPassword: string = "";

  onLoginSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      console.log('Login form submitted with values:', loginForm.value);
      // Implement actual login logic here
    }
  }

  onRegisterSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      console.log('Register form submitted with values:', registerForm.value);
      // Implement actual registration logic here
    }
  }
}
