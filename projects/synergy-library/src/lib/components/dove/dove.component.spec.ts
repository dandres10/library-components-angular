/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoveComponent } from './dove.component';

describe('DoveComponent', () => {
  let component: DoveComponent;
  let fixture: ComponentFixture<DoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
