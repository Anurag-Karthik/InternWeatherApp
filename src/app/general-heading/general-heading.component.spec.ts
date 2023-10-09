import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHeadingComponent } from './general-heading.component';

describe('GeneralHeadingComponent', () => {
  let component: GeneralHeadingComponent;
  let fixture: ComponentFixture<GeneralHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralHeadingComponent]
    });
    fixture = TestBed.createComponent(GeneralHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
