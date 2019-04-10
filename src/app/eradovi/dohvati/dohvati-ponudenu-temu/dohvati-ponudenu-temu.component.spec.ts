import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DohvatiPonudenuTemuComponent } from './dohvati-ponudenu-temu.component';

describe('DohvatiPonudenuTemuComponent', () => {
  let component: DohvatiPonudenuTemuComponent;
  let fixture: ComponentFixture<DohvatiPonudenuTemuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DohvatiPonudenuTemuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DohvatiPonudenuTemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
