import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {AlbumService} from '../../service/album.service';
import {Album} from '../../model/album';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {MatDialog} from '@angular/material';
import {MsgInformacionComponent} from '../../mensaje/msg-informacion/msg-informacion.component';
import {MsgErrorService} from '../../service/msg-error.service';
import {MsgErrorComponent} from '../../mensaje/msg-error/msg-error.component';
import {MsgConfirmacionComponent} from '../../mensaje/msg-confirmacion/msg-confirmacion.component';
import {MsgAlertaComponent} from '../../mensaje/msg-alerta/msg-alerta.component';
import {constantes} from '../../constantes/constantes';
import {GenericoComponent} from '../generico/generico.component';

@Component({
  selector: 'app-album-registro',
  templateUrl: './album-registro.component.html',
  styleUrls: ['./album-registro.component.css']
})
export class AlbumRegistroComponent  extends  GenericoComponent implements OnInit {
  frmRegistro: FormGroup;

  codigo: number;
  constructor(public albumService: AlbumService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              protected location: Location,
              protected dialog: MatDialog
  ) {
    super(dialog, location);
  }

  ngOnInit() {
    this.frmRegistro = new FormGroup({
      nombre: new FormControl(
        '',
        [ Validators.required,
                       Validators.minLength(2),
                      Validators.maxLength(240)]),
      descripcion: new FormControl(
        '',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(4000)])
    });

    this.codigo = 0;
    this.activatedRoute.params
      .subscribe(params => {
          if (!params.codigo) {
            return;
          }
          this.codigo = Number.parseInt(params.codigo);
          this.buscarXCodigo(this.codigo);
        }
      );
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.frmRegistro.controls[controlName].hasError(errorName);
  }
  public onCancel = () => {
    this.location.back();
  }
  public onSubmit = () => {
    if (!this.frmRegistro.valid) {
      return;
    }
    const album: Album = new Album();
    album.nombre = this.f.nombre.value;
    album.descripcion = this.f.descripcion.value;

    const body = JSON.stringify(album);
    console.log('album ' + body );

    if (this.codigo > 0) {
      this.albumService.actualizar(this.codigo, album)
        .subscribe((res) => {
            this.msgAviso(res);
          },
          () => {
            this.msgError();
          });
    } else {
      this.albumService.insertar(album)
        .subscribe((res) => {
          this.msgAviso(res);
        },
          () => {
              this.msgError();
          });
    }
  }

  get f() {
    return this.frmRegistro.controls;
  }

  public limpiar() {
    this.f.nombre.setValue('');
    this.f.descripcion.setValue('');
  }
  public buscarXCodigo(codigo: number) {
    this.albumService.buscarXCodigo(codigo)
      .subscribe(
        res => {
          const album: Album = res.data;
          this.f.nombre.setValue(album.nombre);
          this.f.descripcion.setValue(album.descripcion);
        }
      );
  }


}
