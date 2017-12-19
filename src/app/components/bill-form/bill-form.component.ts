import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { CustomerService } from '../../services/customer.service';
import { BillService } from '../../services/bill.service';

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

  constructor(
    private fb: FormBuilder,
    private customerSvc: CustomerService,
    private billSvc: BillService) {

    this.customerSvc.getCustomers()
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
      to: ['', Validators.required],
      date: new Date(),
      articles: this.fb.array([
        this.initArticles(),
      ])
    });

    this.billForm.get('to').valueChanges.subscribe(value => {
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

  private initArticles(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required],
      price: ['', Validators.required],
      amount: ['', Validators.required],
      amountType: 'h',
      tax: 20
    });
  }

  public addArticle(): void {
    // add Article to the list
    const control = <FormArray>this.billForm.controls['articles'];
    control.push(this.initArticles());
  }

  public removeArticle(index: number): void {
    // remove address from the list
    const control = <FormArray>this.billForm.controls['articles'];
    control.removeAt(index);
  }



  newBill(bill: IBill) {
    this.billSvc.add(bill);
  }

}
