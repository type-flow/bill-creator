import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

import { CustomerService } from '../../services/customer.service';
import { ICustomer } from '../../interfaces/customer.interface';
import { IDialogConfirm } from '../../interfaces/dialog-confirm.interface';

@Component({
  selector: 'customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.scss']
})
export class CustomerListItemComponent implements OnInit {
  private gender: string;

  @Input('customer') customer: ICustomer;
  constructor(private customerService: CustomerService, public dialog: MatDialog) { }

  ngOnInit() {
    if ( this.customer.sex ) {
      switch ( this.customer.sex ) {
        case 'male': this.gender = 'Herr'; break;
        case 'female': this.gender = 'Frau'; break;
      }
    }
  }

  delete(): void {
    let dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '400px',
      data: {
        title: `Löschen von ${this.customer.company? this.customer.company: this.customer.lname}`,
        content: `Wollen Sie den Eintrag wirklich löschen?`,
        cancel: `Abbrechen`,
        close: `Ja`
      } as IDialogConfirm
    });

    dialogRef.afterClosed().subscribe(proceed => {
      if(!proceed) {
        return;
      }
      this.customerService.delete(this.customer);
    });
  }
}
