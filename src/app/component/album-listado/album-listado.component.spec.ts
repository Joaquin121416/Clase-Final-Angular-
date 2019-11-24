import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListadoComponent } from './album-listado.component';

describe('AlbumListadoComponent', () => {
  let component: AlbumListadoComponent;
  let fixture: ComponentFixture<AlbumListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
