import { Component } from '@angular/core';
import {FullName} from '../model/full-name';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './reactive.component.html',
  styles: [`
    input:focus{
      outline: none;
    }
    .error {
      border: 1px solid red;
    }
  `]
})
export class ModelComponent {

  firstName: FormControl;
  middleInitial: FormControl;
  lastName: FormControl;
  nameForm: FormGroup;

  message: string;

  constructor() {
    this.firstName = new FormControl('', Validators.required);
    this.middleInitial = new FormControl();
    this.lastName = new FormControl('', Validators.required);

    this.nameForm = new FormGroup({
      first: this.firstName,
      middle: this.middleInitial,
      last: this.lastName,
    });
  }

  invalid(field: FormControl): boolean {
    return field && field.touched && field.invalid;
  }

  submit(fullName: FullName): void {
    this.message = `Your full name is ${fullName.first} ${fullName.middle || ''} ${fullName.last}`;
  }

}
