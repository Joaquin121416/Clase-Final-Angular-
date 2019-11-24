import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AlbumListadoComponent } from './component/album-listado/album-listado.component';
import { AlbumRegistroComponent } from './component/album-registro/album-registro.component';
import { GenericoComponent } from './component/generico/generico.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './routes/app-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatMenuModule,
  MatNativeDateModule, MatOptionModule,
  MatPaginatorModule, MatSelectModule,
  MatSortModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MsgErrorComponent } from './mensaje/msg-error/msg-error.component';
import {MensajeModule} from './mensaje/mensaje.module';
import {MsgInformacionComponent} from './mensaje/msg-informacion/msg-informacion.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { AlbumDetalleComponent } from './component/album-detalle/album-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListadoComponent,
    AlbumRegistroComponent,
    GenericoComponent,
    InicioComponent,
    AlbumDetalleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,

    // Material Design
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    FlexLayoutModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,

    /* Shared */
    MensajeModule

  ],
  entryComponents: [
    AlbumDetalleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
