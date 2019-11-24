import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-msg-confirmacion',
  templateUrl: './msg-confirmacion.component.html',
  styleUrls: ['./msg-confirmacion.component.css']
})
export class MsgConfirmacionComponent {

  constructor(
    public dialogRef: MatDialogRef<MsgConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public cancelar() {
    this.dialogRef.close();
  }

}
