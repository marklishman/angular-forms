import { Component } from '@angular/core';

@Component({
  selector: 'app-login-one',
  template: `
    <form (submit)="onSubmit(email.value, password.value, keep.value)">
      <p>
        Email: <input type="email" #email>
      </p>
      <p>
        Password: <input type="password" #password>
      </p>
      <label>
        <input type="checkbox" #keep>
        Keep me logged in
      </label>
      <p>
        <button type="submit">Login</button>
      </p>
    </form>
    <pre>{{values | json}}</pre>
  `
})
export class LoginOneComponent {

  values: any = {};

  onSubmit(email: string, password: string, keep: string): boolean {
    this.values = {
      email: email,
      password: password,
      keep: keep
    };
    return false;
  }
}
