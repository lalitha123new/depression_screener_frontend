import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenerPage2Component } from './screener-page2.component';

describe('ScreenerPage2Component', () => {
  let component: ScreenerPage2Component;
  let fixture: ComponentFixture<ScreenerPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenerPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenerPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
