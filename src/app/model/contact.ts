import { FullName } from './full-name';
import { PhoneNumber } from './phone';

export class Contact {

  constructor (
    public fullName: FullName,
    public phoneNumbers: PhoneNumber[],
    public starred: boolean,
    public labels: string[]) {
  }
}
