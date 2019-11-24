import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-msg-informacion',
  templateUrl: './msg-informacion.component.html',
  styleUrls: ['./msg-informacion.component.css']
})
export class MsgInformacionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
