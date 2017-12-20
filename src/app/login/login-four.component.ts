import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-four',
  template: `
    <form #loginForm="ngForm"
          (submit)="onSubmit(loginForm)">
      <p>
        Email: <input type="email"
                      email
                      required
                      ngModel name="email"
                      #email="ngModel">
        <span *ngIf="email.dirty && email.errors?.required" class="error">Enter a value</span>
        <span *ngIf="email.touched && email.errors?.email" class="error">Invalid email</span>
      </p>
      <p>
        Password: <input type="password"
                         required
                         minlength="5"
                         ngModel
                         name="password"
                         #password="ngModel">
        <span [hidden]="password.pristine || !password.errors?.required" class="error">Enter a value</span>
        <span [hidden]="password.untouched || !password.errors?.minlength" class="error">Must be at least 5 (!!!!!) characters </span>
      </p>
      <label>
        <input type="checkbox"
               ngModel
               name="keep">
        Keep me logged in
      </label>
      <p>
        <button type="submit"
                [disabled]="loginForm.invalid">
          Login
        </button>
      </p>
    </form>
    <pre>{{values | json}}</pre>
  `,
})
export class LoginFourComponent {

  values: any = {};

  onSubmit(form: NgForm): void {
    this.values = {
      email: form.controls.email.value,
      password: form.controls.password.value,
      keep: form.controls.keep.value
    };
  }
}
