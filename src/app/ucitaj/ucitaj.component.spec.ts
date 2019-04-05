import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcitajComponent } from './ucitaj.component';

describe('UcitajComponent', () => {
  let component: UcitajComponent;
  let fixture: ComponentFixture<UcitajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcitajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcitajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
