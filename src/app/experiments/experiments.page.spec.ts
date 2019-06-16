import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsPage } from './experiments.page';

describe('ExperimentsPage', () => {
  let component: ExperimentsPage;
  let fixture: ComponentFixture<ExperimentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
