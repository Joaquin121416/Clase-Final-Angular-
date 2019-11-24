import { Component, OnInit } from '@angular/core';
import {constantes} from '../../constantes/constantes';
import {MsgErrorComponent} from '../../mensaje/msg-error/msg-error.component';
import {MatDialog} from '@angular/material';
import {MsgInformacionComponent} from '../../mensaje/msg-informacion/msg-informacion.component';
import {MsgAlertaComponent} from '../../mensaje/msg-alerta/msg-alerta.component';
import {Location} from '@angular/common';
import {MsgConfirmacionComponent} from '../../mensaje/msg-confirmacion/msg-confirmacion.component';

@Component({
  selector: 'app-generico',
  templateUrl: './generico.component.html',
  styleUrls: ['./generico.component.css']
})
export class GenericoComponent implements OnInit {
  protected msgDialog = {
    height: '250px',
    width: '500px',
    disableClose: true,
    data: { }
  };
  constructor(
    protected dialog: MatDialog,
    protected location: Location) {

  }

  ngOnInit() {

  }

  protected  msgEliminar(msg: string) {
    this.msgDialog.data = { mensaje : constantes.MSG_REG_CONFIRMACION,
      mensaje1: msg};
    const dialogRef = this.dialog.open(MsgConfirmacionComponent, this.msgDialog);
    return dialogRef;
  }
  protected msgAviso( res: any) {
    this.msgDialog.data = { mensaje : res.mensaje};
    if ( res.codigo === 1) {
      const msg = this.dialog.open(MsgInformacionComponent, this.msgDialog);
      msg.afterClosed()
        .subscribe(result => {
        });
    } else {
      this.dialog.open(MsgAlertaComponent, this.msgDialog);
    }
  }
  protected msgError() {
    this.msgDialog.data = {mensaje: constantes.MSG_REG_ERROR};
    this.dialog.open(MsgErrorComponent, this.msgDialog);
  }
}
