import {Component, OnInit} from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'VaccinationRegistration';

  stepperItems: MenuItem[] = [];

  ngOnInit(): void {
    this.stepperItems = [
      {label: 'Authentication', routerLink: 'first'},
      {label: 'Select Day', routerLink: 'second'},
      {label: 'Select Time', routerLink: 'third'},
      {label: 'Confirmation', routerLink: 'fourth'},
    ];
  }
}
