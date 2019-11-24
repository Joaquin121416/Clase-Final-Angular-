import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlbumListadoComponent} from '../component/album-listado/album-listado.component';
import {AlbumRegistroComponent} from '../component/album-registro/album-registro.component';
import {AppComponent} from '../app.component';
import {InicioComponent} from '../component/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'album-listado',
    component: AlbumListadoComponent
  },
  {
    path: 'album-registro',
    component: AlbumRegistroComponent
  },
  {
    path: 'album-registro/:codigo',
    component: AlbumRegistroComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
