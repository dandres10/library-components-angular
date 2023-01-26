/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NorthArrowComponent } from './north-arrow.component';

describe('NorthArrowComponent', () => {
  let component: NorthArrowComponent;
  let fixture: ComponentFixture<NorthArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
