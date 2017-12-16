
export enum PhoneType {
  Mobile = 0,
  Home,
  Work
}

export namespace PhoneType {

  export function values() {
    return Object.keys(PhoneType).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}

export class PhoneNumber {

  constructor(
    public number: string,
    public phoneType: PhoneType) {
  }

}
