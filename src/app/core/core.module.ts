import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './fragments/layout/header/header.component';



@NgModule({
  declarations: [
    // Layout
    HeaderComponent,

    // Components


    // Pipes


    // Directives

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,


  ],
  entryComponents: [

  ],
  exports: [
    // Layout

    HeaderComponent,

    // Components


    // Modal

    // Pipes


    // Directives

  ]
})
export class CoreModule { }
