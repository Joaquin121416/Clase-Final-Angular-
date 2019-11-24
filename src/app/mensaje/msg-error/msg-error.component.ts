import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-msg-error',
  templateUrl: './msg-error.component.html',
  styleUrls: ['./msg-error.component.css']
})
export class MsgErrorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MsgErrorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public cerrar = () => {
    this.dialogRef.close();
  }
}
