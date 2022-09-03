import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCustomer } from 'src/app/store/actions/customer.actions';
import { CustomerState } from 'src/app/store/reducers/customer.reducers';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  constructor(private store: Store<CustomerState>) { }

  ngOnInit(): void {
  }
  addCustomer(customerName: string): void {
        const customer = new Customer();
       customer.name = customerName;
      //     this.store.dispatch(addCustomer(customer));
       this.store.dispatch(addCustomer({customer}));
      }
}
