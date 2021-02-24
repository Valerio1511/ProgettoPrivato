import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MenuComponent} from './fragments/layout/menu/menu.components';
import {HeaderComponent} from './fragments/layout/header/header.component';
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    // Layout
    MenuComponent,
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
    NgbCollapseModule,


  ],
  entryComponents: [

  ],
  exports: [
    // Layout

    MenuComponent,
    HeaderComponent,

    // Components


    // Modal

    // Pipes


    // Directives

  ]
})
export class CoreModule { }
