import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MsgConfirmacionComponent } from './msg-confirmacion/msg-confirmacion.component';
import { MsgInformacionComponent } from './msg-informacion/msg-informacion.component';
import {MsgErrorComponent} from './msg-error/msg-error.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import { MsgAlertaComponent } from './msg-alerta/msg-alerta.component';

@NgModule({
  declarations: [
    MsgInformacionComponent,
    MsgErrorComponent,
    MsgConfirmacionComponent,
    MsgAlertaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    FlexLayoutModule,
    MsgInformacionComponent,
    MsgErrorComponent,
    MsgConfirmacionComponent,
    MatDialogModule
  ],
  entryComponents: [
    MsgInformacionComponent,
    MsgErrorComponent,
    MsgConfirmacionComponent,
    MsgAlertaComponent
]
})
export class MensajeModule { }
