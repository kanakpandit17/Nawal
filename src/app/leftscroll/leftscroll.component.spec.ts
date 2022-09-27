import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftscrollComponent } from './leftscroll.component';

describe('LeftscrollComponent', () => {
  let component: LeftscrollComponent;
  let fixture: ComponentFixture<LeftscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftscrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
