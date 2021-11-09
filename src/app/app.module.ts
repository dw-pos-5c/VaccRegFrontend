import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {StepsModule} from 'primeng/steps';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';
import { FourthStepComponent } from './fourth-step/fourth-step.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FourthStepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StepsModule,
    AppRoutingModule,
    InputNumberModule,
    ButtonModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
