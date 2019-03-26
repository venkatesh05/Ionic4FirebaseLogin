import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersdetailPage } from './offersdetail.page';

describe('OffersdetailPage', () => {
  let component: OffersdetailPage;
  let fixture: ComponentFixture<OffersdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
