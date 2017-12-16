import { FullName } from './full-name';
import { PhoneNumber } from './Phone';

export class Contact {

  constructor (
    public fullName: FullName,
    public phoneNumbers: PhoneNumber[],
    public starred: boolean,
    public labels: string[]) {
  }
}
