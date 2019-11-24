import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgInformacionComponent } from './msg-informacion.component';

describe('MsgInformacionComponent', () => {
  let component: MsgInformacionComponent;
  let fixture: ComponentFixture<MsgInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
