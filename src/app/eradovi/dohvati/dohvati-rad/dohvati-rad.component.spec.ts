import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DohvatiRadComponent } from './dohvati-rad.component';

describe('DohvatiRadComponent', () => {
  let component: DohvatiRadComponent;
  let fixture: ComponentFixture<DohvatiRadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DohvatiRadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DohvatiRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
