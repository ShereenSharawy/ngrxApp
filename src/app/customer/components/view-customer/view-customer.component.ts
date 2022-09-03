import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerState } from 'src/app/store/reducers/customer.reducers';
import { Customer } from '../../models/customer';
import {selectCustomers} from 'src/app/store/selectors/customer.selectors'
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  customers$: Observable<Customer[]>;
  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
   }

  ngOnInit(): void {
  }

}
