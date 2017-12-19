import { Component } from '@angular/core';

@Component({
  selector: 'app-login-one',
  template: `
    <form>
      <p>
        Email: <input type="text" #email>
      </p>
      <p>
        Password: <input type="password" #password>
      </p>
      <p>
        <label>
          <input type="checkbox" #keep>
          Keep me logged in
        </label>
      </p>
      <p>
        <button (click)="onSubmit(email.value, password.value, keep.value)">
          Login
        </button>
      </p>
    </form>
    <pre>{{values | json}}</pre>
  `
})
export class LoginOneComponent {

  values: any = {};

  onSubmit(email: string, password: string, keep: string): void {
    this.values = {
      email: email,
      password: password,
      keep: keep
    };
  }
}
