import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thuchanh1Component } from './thuchanh1.component';

describe('Thuchanh1Component', () => {
  let component: Thuchanh1Component;
  let fixture: ComponentFixture<Thuchanh1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thuchanh1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Thuchanh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
