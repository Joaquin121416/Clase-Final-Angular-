import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumRegistroComponent } from './album-registro.component';

describe('AlbumRegistroComponent', () => {
  let component: AlbumRegistroComponent;
  let fixture: ComponentFixture<AlbumRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
