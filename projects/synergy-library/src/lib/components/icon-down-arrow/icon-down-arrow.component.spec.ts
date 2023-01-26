/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconDownArrowComponent } from './icon-down-arrow.component';

describe('IconDownArrowComponent', () => {
  let component: IconDownArrowComponent;
  let fixture: ComponentFixture<IconDownArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconDownArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDownArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
