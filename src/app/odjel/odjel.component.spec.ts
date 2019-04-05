import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdjelComponent } from './odjel.component';

describe('OdjelComponent', () => {
  let component: OdjelComponent;
  let fixture: ComponentFixture<OdjelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdjelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdjelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
