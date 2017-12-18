import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { IDialogConfirm } from '../../interfaces/dialog-confirm.interface';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public data: IDialogConfirm) { }

}
