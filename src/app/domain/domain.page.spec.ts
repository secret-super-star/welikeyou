import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainPage } from './domain.page';

describe('DomainPage', () => {
  let component: DomainPage;
  let fixture: ComponentFixture<DomainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
