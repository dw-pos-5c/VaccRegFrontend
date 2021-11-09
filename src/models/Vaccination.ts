export default class Vaccination {
  registrationId: number;
  vaccinationDate: Date;

  constructor(registration: number, vaccinationDate: Date) {
    this.registrationId = registration;
    this.vaccinationDate = vaccinationDate;
  }
}
