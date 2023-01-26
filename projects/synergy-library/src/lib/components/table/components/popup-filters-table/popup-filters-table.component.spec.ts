/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopupFiltersTableComponent } from './popup-filters-table.component';

describe('PopupFiltersTableComponent', () => {
  let component: PopupFiltersTableComponent;
  let fixture: ComponentFixture<PopupFiltersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupFiltersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupFiltersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
