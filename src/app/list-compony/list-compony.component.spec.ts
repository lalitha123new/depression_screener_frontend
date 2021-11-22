import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponyComponent } from './list-compony.component';

describe('ListComponyComponent', () => {
  let component: ListComponyComponent;
  let fixture: ComponentFixture<ListComponyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
