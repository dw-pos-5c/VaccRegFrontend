import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Registration from '../models/Registration';
import Vaccination from '../models/Vaccination';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:5000/api';

  checkLoginData(ssn: number, pin: number): Promise<Registration> {
    return this.http.get<Registration>(`${this.baseUrl}/Registrations/check?ssn=${ssn}&pin=${pin}`).toPromise();
  }

  getAvailableTimeslots(date: Date): Promise<Date[]> {
    return this.http.get<Date[]>(`${this.baseUrl}/Vaccinations/available?date=${date.toISOString()}`).toPromise();
  }

  postVaccination(vaccination: Vaccination): Promise<Vaccination> {
    return this.http.post<Vaccination>(`${this.baseUrl}/Vaccinations`, vaccination).toPromise();
  }
}
