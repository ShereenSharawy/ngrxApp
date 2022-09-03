import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { StoreModule } from '@ngrx/store';
import {customerFeatureKey, reducer} from '../store/reducers/customer.reducers';
import { IndexCustomerComponent } from './components/index-customer.component';

@NgModule({
  declarations: [
    AddCustomerComponent,
    ViewCustomerComponent,
    IndexCustomerComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ],
  exports:[
    IndexCustomerComponent

  ]
})
export class CustomerModule { }
