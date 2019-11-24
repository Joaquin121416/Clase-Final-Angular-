import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {GenericoService} from './generico.service';
import {Album} from '../model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends GenericoService {

  constructor( private http: HttpClient) {
    super();
  }

  public listar(): any {
    return this.http.get(super.getURL() + 'albums')
      .pipe(map(data => data));
  }

  public buscarXCodigo(codigo: number): any {
    return this.http.get(
      super.getURL() + 'albums/' + codigo)
      .pipe(map(data => data));
  }


  public buscarXNombre(nombre: string): any {
    console.log('nombre ' + nombre);
    return this.http.get(
      super.getURL() + 'albums/by-nombre?nombre=' + nombre)
      .pipe(map(data => data));
  }

  public insertar(album: Album): any {
    const body = JSON.stringify(album);
    this.options.params = new HttpParams();
    return this.http.post(super.getURL()
      + 'albums', body , this.options);
  }
  public actualizar(codigo: number, album: Album): any {
    const body = JSON.stringify(album);
    this.options.params = new HttpParams();
    return this.http.put(super.getURL()
      + 'albums/' + codigo, body , this.options);
  }

  public eliminar(codigo: number): any {
    return this.http.delete(super.getURL()
      + 'albums/' + codigo, this.options);
  }
}
