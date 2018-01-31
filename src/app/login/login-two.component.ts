import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-two',
  template: `
    <form #loginForm="ngForm"
          (ngSubmit)="onSubmit(loginForm)">
      <p>
        Email: <input type="email"
                      ngModel
                      name="email">
      </p>
      <p>
        Password: <input type="password"
                         ngModel
                         name="password">
      </p>
      <label>
        <input type="checkbox"
               ngModel
               name="keep">
        Keep me logged in
      </label>
      <p>
        <button type="submit">
          Login
        </button>
      </p>
    </form>
    <pre>{{values | json}}</pre>
  `
})
export class LoginTwoComponent {

  values: any = {};

  onSubmit(form: NgForm): void {
    this.values = {
      email: form.controls.email.value,
      password: form.controls.password.value,
      keep: form.controls.keep.value
    };
  }
}
