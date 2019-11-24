import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';
import {MsgErrorComponent} from '../mensaje/msg-error/msg-error.component';


@Injectable({
  providedIn: 'root'
})
export class MsgErrorService {
  public dialogConfig;

  constructor(private router: Router, private dialog: MatDialog) { }

  public handleError(err: HttpErrorResponse) {
    let msg = '';
    if (err.error instanceof ErrorEvent) {
        msg = err.error.message;
      } else {
        msg = err.status + ' - ' + err.error;
      }
    this.dialogConfig.data = { mensaje: 'Error al realizar el registro' };
    this.dialog.open(MsgErrorComponent, this.dialogConfig);
  }
}
