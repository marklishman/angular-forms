import { Component } from '@angular/core';
import {FullName} from '../model/full-name';
import { Contact } from '../model/contact';
import { PhoneNumber, PhoneType } from '../model/phone';

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

  test: string;

  contact: Contact;
  PhoneType = PhoneType;

  constructor() {
    this.setup();
  }

  save(contact: Contact): void {
    console.log('saving', contact);
  }

  private setup(): void {
    const numbers = [
      new PhoneNumber('0176443434', PhoneType.Work),
      new PhoneNumber('0165635245', PhoneType.Home),
    ];

    this.contact = new Contact(
      new FullName(
        'Bob',
        'Twitching',
        'P',
        'Twitchy'
      ),
      numbers,
      true,
      ['work', 'agent']
    );
  }

}
