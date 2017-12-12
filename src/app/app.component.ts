import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      <app-form-based></app-form-based>
    </p>
    <hr>
    <p>
      <app-model-driven></app-model-driven>
    </p>
  `
})
export class AppComponent {}
