import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-three',
  template: `
    <form #loginForm="ngForm">
      <p>
        Email: <input type="email"
                      required
                      ngModel name="email"
                      #email="ngModel">
      </p>
      <p class="control">
        pristine: {{email.pristine}}<br/>
        touched: {{email.touched}}<br/>
        valid: {{email.valid}}
      </p>
      <p>
        Password: <input type="password"
                         required
                         ngModel
                         name="password"
                         #password="ngModel">
      </p>
      <p class="control">
        dirty: {{password.dirty}}<br/>
        untouched: {{password.untouched}}<br/>
        invalid: {{password.invalid}}
      </p>
    </form>
    <p class="control">
      Form<br/>
      dirty: {{loginForm.dirty}}<br/>
      untouched: {{loginForm.untouched}}<br/>
      invalid: {{loginForm.invalid}}
    </p>
    <button (onClick)="loginForm.reset()">Reset</button>
  `,
})
export class LoginThreeComponent {
}
