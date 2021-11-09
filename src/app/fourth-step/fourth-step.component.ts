import { Component, OnInit } from '@angular/core';
import Vaccination from '../../models/Vaccination';
import {DataProviderService} from '../data-provider.service';

@Component({
  selector: 'app-fourth-step',
  templateUrl: './fourth-step.component.html',
  styleUrls: ['./fourth-step.component.css']
})
export class FourthStepComponent implements OnInit {

  vaccination: Vaccination;

  name: string;

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
    this.vaccination = this.dataProvider.vaccination;
    this.name = `${this.dataProvider.registration.firstName} ${this.dataProvider.registration.lastName}`;
  }

}
