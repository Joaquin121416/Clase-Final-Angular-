import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-msg-alerta',
  templateUrl: './msg-alerta.component.html',
  styleUrls: ['./msg-alerta.component.css']
})
export class MsgAlertaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
