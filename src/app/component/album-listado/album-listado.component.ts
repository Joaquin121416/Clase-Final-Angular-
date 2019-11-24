import {Component, OnInit, ViewChild} from '@angular/core';
import {Album} from '../../model/album';
import {AlbumService} from '../../service/album.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {GenericoComponent} from '../generico/generico.component';
import {MsgConfirmacionComponent} from '../../mensaje/msg-confirmacion/msg-confirmacion.component';
import {AlbumDetalleComponent} from '../album-detalle/album-detalle.component';

@Component({
  selector: 'app-album-listado',
  templateUrl: './album-listado.component.html',
  styleUrls: ['./album-listado.component.css']
})
export class AlbumListadoComponent extends GenericoComponent implements OnInit {
  frmListado: FormGroup;

  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'Acciones'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private albumService: AlbumService,
    private formBuilder: FormBuilder,
    private router: Router,
    protected dialog: MatDialog) {
    super(dialog, null);
  }

  ngOnInit() {
    this.frmListado = new FormGroup({
      nombre: new FormControl(
        ''
        )
    });
    this.buscar();
  }

  verDetalle(codigo: number) {
   const msgDialogDet = {
      height: '280px',
      width: '800px',
      disableClose: true,
      data: {'codigo' : codigo}
    };
    const dialogRef = this.dialog.open(AlbumDetalleComponent, msgDialogDet);

  }

  public nuevo() {
    this.router.navigate(['album-registro']);
  }

  public limpiar() {
    this.frmListado.controls.nombre.setValue('');
    this.buscar();
  }

  public buscar() {
      const nombre = this.frmListado.controls.nombre.value;
      console.log('nombre ' + nombre);
      this.albumService.buscarXNombre(nombre)
        .subscribe(
          res => {
            this.dataSource = new MatTableDataSource<Album>(res.data);
            this.dataSource.paginator = this.paginator;
            console.log('Sort...');
            this.dataSource.sort = this.sort;
          }
        );
    }

    public modificar(codigo: number) {
      this.router.navigate(['album-registro', codigo]);
    }

  public eliminar(codigo: number, msg: string) {
    this.msgEliminar(msg).afterClosed().subscribe(resp => {
      if (resp) {
        this.albumService.eliminar(codigo)
          .subscribe((res) => {
              this.msgAviso(res);
              this.buscar();
            },
            () => {
              this.msgError();
            });
      }
    });


  }
}
