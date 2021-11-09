export default class Registration {
  id: number;
  socialSecurityNumber: number;
  pinCode: number;
  firstName: string;
  lastName: string;

  constructor(id: number, ssn: number, pin: number, firstName: string, lastName: string) {
    this.id = id;
    this.socialSecurityNumber = ssn;
    this.pinCode = pin;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}
