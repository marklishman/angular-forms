import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      <app-login-one></app-login-one>
    </p>
    <hr/>
    <p>
      <app-login-two></app-login-two>
    </p>
    <!--<hr>-->
    <!--<p>-->
      <!--<app-form-based></app-form-based>-->
    <!--</p>-->
    <!--<hr>-->
    <!--<p>-->
      <!--<app-model-driven></app-model-driven>-->
    <!--</p>-->
  `
})
export class AppComponent {}
