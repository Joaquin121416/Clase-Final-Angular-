import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgAlertaComponent } from './msg-alerta.component';

describe('MsgAlertaComponent', () => {
  let component: MsgAlertaComponent;
  let fixture: ComponentFixture<MsgAlertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgAlertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
