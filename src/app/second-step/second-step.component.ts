import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataProviderService} from '../data-provider.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  dayForm = new FormGroup({
    date: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private router: Router, private dataProvider: DataProviderService) {
    this.minDate = new Date();
    this.minDate.setUTCFullYear(2021, 11, 1);
    this.maxDate = new Date();
    this.maxDate.setUTCFullYear(2021, 11, 20);
  }

  ngOnInit(): void {
  }

  nextPage() {
    this.dataProvider.date = this.dayForm.get('date').value;
    this.router.navigate(['third']);
  }
}
