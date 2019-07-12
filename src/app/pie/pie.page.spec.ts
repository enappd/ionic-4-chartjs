import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePage } from './pie.page';

describe('PiePage', () => {
  let component: PiePage;
  let fixture: ComponentFixture<PiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PiePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
