import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DohvatiOdjelDjelatnikaComponent } from './dohvati-odjel-djelatnika.component';

describe('DohvatiOdjelDjelatnikaComponent', () => {
  let component: DohvatiOdjelDjelatnikaComponent;
  let fixture: ComponentFixture<DohvatiOdjelDjelatnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DohvatiOdjelDjelatnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DohvatiOdjelDjelatnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
