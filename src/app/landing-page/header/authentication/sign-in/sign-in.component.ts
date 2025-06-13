import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    imports: [FormsModule, RouterLink]
})
export class SignInComponent {
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
