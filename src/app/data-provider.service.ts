import { Injectable } from '@angular/core';
import Registration from '../models/Registration';
import Vaccination from '../models/Vaccination';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  registration: Registration;
  date: Date;
  vaccinationDate: Date;

  vaccination: Vaccination;

  constructor() { }
}
