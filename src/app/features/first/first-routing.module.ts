import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './components/first.component';


const FIRST_ROUTES: Routes = [
  {
    path: '',
    component: FirstComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(FIRST_ROUTES)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
