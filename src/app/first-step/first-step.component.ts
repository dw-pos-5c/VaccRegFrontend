import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BackendConnectorService} from '../backend-connector.service';
import {DataProviderService} from '../data-provider.service';

import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {

  loginForm = new FormGroup({
    ssn: new FormControl('', [
        Validators.required,
        Validators.min(1000000000),
        Validators.maxLength(9999999999),
      ]),
    pin: new FormControl('',
      [
        Validators.required,
        Validators.min(100000),
        Validators.max(999999),
      ]),
  });

  constructor(private router: Router, private backendConnector: BackendConnectorService, private dataProvider: DataProviderService) {
  }

  ngOnInit(): void {
  }

  nextPage() {
    this.backendConnector.checkLoginData(this.loginForm.get('ssn').value, this.loginForm.get('pin').value).then(result => {
      console.log(result);
      this.dataProvider.registration = result;
      this.router.navigate(['second']);
    });
  }
}
