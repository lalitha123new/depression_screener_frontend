import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenerPage1Component } from './screener-page1.component';

describe('ScreenerPage1Component', () => {
  let component: ScreenerPage1Component;
  let fixture: ComponentFixture<ScreenerPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenerPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenerPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
