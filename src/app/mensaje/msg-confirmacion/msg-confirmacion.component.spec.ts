import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgConfirmacionComponent } from './msg-confirmacion.component';

describe('MsgConfirmacionComponent', () => {
  let component: MsgConfirmacionComponent;
  let fixture: ComponentFixture<MsgConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
