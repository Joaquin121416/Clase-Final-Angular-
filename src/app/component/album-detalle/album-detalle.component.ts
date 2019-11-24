import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Album} from '../../model/album';
import {AlbumService} from '../../service/album.service';

@Component({
  selector: 'app-album-detalle',
  templateUrl: './album-detalle.component.html',
  styleUrls: ['./album-detalle.component.css']
})
export class AlbumDetalleComponent implements OnInit {

  album: Album;
  constructor(
    public albumService: AlbumService,
    public dialogRef: MatDialogRef<AlbumDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  public cancelar() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log('this.data.codigo ' + this.data.codigo)
    this.buscarXCodigo(this.data.codigo);
  }
  public buscarXCodigo(codigo: number) {
    this.albumService.buscarXCodigo(codigo)
      .subscribe(
        res => {
          console.log('res.data ' + res.data)
          this.album = res.data;

        }
      );
  }
}
