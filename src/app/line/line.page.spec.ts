import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePage } from './line.page';

describe('LinePage', () => {
  let component: LinePage;
  let fixture: ComponentFixture<LinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
