/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconXComponent } from './icon-x.component';

describe('IconXComponent', () => {
  let component: IconXComponent;
  let fixture: ComponentFixture<IconXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
