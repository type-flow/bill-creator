import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

import { ICustomer } from '../../interfaces/customer.interface';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  public customerForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      sex: '',
      fname: '',
      lname: '',
      company: '',
      street: '',
      number: undefined,
      door: undefined,
      town: '',
      zip: undefined,
      country: ''
    } as ICustomer);
  }

  newCustomer(customer: ICustomer) {
    // TODO: validation if customer exists should go here
    // this.customerService.checkIfExists(customer);
    this.customerService.add(customer);
  }



}
