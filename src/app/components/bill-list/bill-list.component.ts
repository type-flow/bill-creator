import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BillService } from '../../services/bill.service';
import { IBill } from '../../interfaces/bill.interface';

@Component({
  selector: 'bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  public bills: Observable<IBill[]>

  constructor(private billSvc: BillService) { }

  ngOnInit() {
    this.bills = this.billSvc.getBills();
  }
}
