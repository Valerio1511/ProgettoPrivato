import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstRoutingModule} from './first-routing.module';
import {FirstComponent} from './components/first.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule,
    ReactiveFormsModule
  ]
})
export class FirstModule { }
