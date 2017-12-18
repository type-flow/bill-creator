import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { CustomerService } from '../../services/customer.service'

import { IBill } from '../../interfaces/bill.interface';
import { ICustomer } from '../../interfaces/customer.interface';

@Component({
  selector: 'bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.scss']
})
export class BillFormComponent implements OnInit {
  public customers: ICustomer[];
  public billForm: FormGroup;
  public filteredCustomers: ICustomer[];

  constructor(private fb: FormBuilder, private customerService: CustomerService) {

    this.customerService.getCustomers()
      .subscribe(customers => {
        customers.map(customer => {
          customer.name = customer.company ? customer.company : `${customer.fname} ${customer.lname}`;
        });
        this.customers = customers;
        this.filteredCustomers = this.customers;
      });
  }

  ngOnInit(): void {

    this.billForm = this.fb.group({
      no: '',
      to: undefined,
      date: new Date(),
      articles: this.fb.array([
        this.initArticles(),
      ])
    });

    this.billForm.get('to').valueChanges.subscribe(value =>  {
      if (value.length == 0) {
        this.filteredCustomers = this.customers;
        return;
      }
      if (value && typeof value === 'string')
        this.filteredCustomers = this.filter(value);
    });
  }

  filter(name: string): ICustomer[] {
    return this.customers.filter(customer => customer.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayCustomer(customer: ICustomer): string {
    if (!customer)
      return '';
    return customer.name;
  }

  private initArticles(): FormGroup  {
    return this.fb.group({
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  // public addArticle() {
  //       // add Article to the list
  //       const control = <FormArray>this.myForm.controls['addresses'];
  //       control.push(this.initAddress());
  //   }

  // public removeArticle(index: number) {
  //     // remove address from the list
  //     const control = <FormArray>this.myForm.controls['addresses'];
  //     control.removeAt(index);
  // }



  newBill(bill: IBill) {
    console.log(bill);
  }

}
