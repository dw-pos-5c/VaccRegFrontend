import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BackendConnectorService} from '../backend-connector.service';
import {DataProviderService} from '../data-provider.service';
import Vaccination from '../../models/Vaccination';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.css']
})
export class ThirdStepComponent implements OnInit {

  options: Date[] = [];

  timeslotForm = new FormGroup({
    timeslot: new FormControl('', [
      Validators.required,
    ])
  })

  constructor(private router: Router, private dataProvider: DataProviderService, private backendConnector: BackendConnectorService) { }

  ngOnInit(): void {
    this.getAvailableTimeslots();
  }

  getAvailableTimeslots(): void {
    this.backendConnector.getAvailableTimeslots(this.dataProvider.date).then(result => {
      this.options = result;
    });
  }

  nextPage() {
    this.dataProvider.vaccinationDate = this.timeslotForm.get('timeslot').value;
    console.log(this.dataProvider.vaccinationDate);
    console.log(this.dataProvider.registration.id);
    this.backendConnector.postVaccination(new Vaccination(this.dataProvider.registration.id, this.dataProvider.vaccinationDate)).then(result => {
      this.dataProvider.vaccination = result;
      this.router.navigate(['fourth']);
    });

  }
}
