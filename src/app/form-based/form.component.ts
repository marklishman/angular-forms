import { Component } from '@angular/core';
import {FullName} from '../full-name';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-based',
  templateUrl: './form.component.html',
  styles: [`
    .error {
      border: 3px solid red;
    }
  `]
})
export class FormComponent {

  fullName: FullName;
  message: string;

  invalid(field: FormControl): boolean {
    return field && field.touched && field.invalid;
  }

  submit(fullName: FullName): void {
    this.message = `Your full name is ${fullName.first} ${fullName.middle || ''} ${fullName.last}`;
  }

}
