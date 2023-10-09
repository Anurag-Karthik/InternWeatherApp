import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempTextComponent } from './temp-text.component';

describe('TempTextComponent', () => {
  let component: TempTextComponent;
  let fixture: ComponentFixture<TempTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempTextComponent]
    });
    fixture = TestBed.createComponent(TempTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
