/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SouthArrowComponent } from './south-arrow.component';

describe('SouthArrowComponent', () => {
  let component: SouthArrowComponent;
  let fixture: ComponentFixture<SouthArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
