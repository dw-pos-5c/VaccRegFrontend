import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FirstStepComponent} from './first-step/first-step.component';
import {SecondStepComponent} from './second-step/second-step.component';
import {ThirdStepComponent} from './third-step/third-step.component';
import {FourthStepComponent} from './fourth-step/fourth-step.component';

const routes: Routes = [
  { path: 'first', component: FirstStepComponent },
  { path: 'second', component: SecondStepComponent },
  { path: 'third', component: ThirdStepComponent },
  { path: 'fourth', component: FourthStepComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
