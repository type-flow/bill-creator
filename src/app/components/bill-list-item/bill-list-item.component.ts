import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

import { BillService } from '../../services/bill.service';
import { PdfService } from '../../services/pdf.service';
import { IBill } from '../../interfaces/bill.interface';
import { IDialogConfirm } from '../../interfaces/dialog-confirm.interface';

@Component({
  selector: 'bill-list-item',
  templateUrl: './bill-list-item.component.html',
  styleUrls: ['./bill-list-item.component.scss']
})
export class BillListItemComponent {
  private gender: string;

  @Input('bill') bill: IBill;
  constructor(private billSvc: BillService, private pdfService: PdfService) { }

  print(): void {
    console.log(this.bill);
  }

}
