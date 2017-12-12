import { Component } from '@angular/core';
import {FullName} from '../full-name';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-based',
  templateUrl: './form.component.html',
  styles: [`
    input:focus{
      outline: none;
    }
    .error {
      border: 1px solid red;
    }
  `]
})
export class FormComponent {

  fullName = {} as FullName;
  message: string;

  submit(fullName: FullName): void {
    this.message = `Your full name is ${fullName.first} ${fullName.middle || ''} ${fullName.last}`;
  }

}
