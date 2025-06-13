import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [FormsModule, ReactiveFormsModule]
})
export class LoginComponent {
  public show: boolean = false;
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ["Test@gmail.com", [Validators.required, Validators.email]],
      password: ["test123", Validators.required],
    });
  }

  showPassword() {
    this.show = !this.show;
  }
   // Simple Login
   login() {
    if (
      this.loginForm.controls["email"].invalid ||
      this.loginForm.controls["email"].value === ""
    ) {

    }

    if (
      this.loginForm.controls["password"].invalid ||
      this.loginForm.controls["password"].value === ""
    ) {

    }
    {
      let user = {
        email: "Test@gmail.com",
        password: "test123",
        name: "test user",
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["messenger"]);
    }
  }
}
