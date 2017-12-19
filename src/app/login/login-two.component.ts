import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-two',
  template: `
    <form #form="ngForm">
      <p>
        Email: <input type="text"
                      ngModel
                      name="email">
      </p>
      <p>
        Password: <input type="password"
                         ngModel
                         name="password">
      </p>
      <p>
        <label>
          <input type="checkbox"
                 ngModel
                 name="keep">
          Keep me logged in
        </label>
      </p>
      <p>
        <button type="submit"
                (click)="onSubmit(form)">
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
