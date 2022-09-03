import { createAction ,props} from "@ngrx/store";
import { Customer } from "src/app/customer/models/customer";

export const addCustomer = createAction('[Customer] Add Customer',
      //(customer: Customer) => ({customer})
      props<{customer: Customer}>()
    );