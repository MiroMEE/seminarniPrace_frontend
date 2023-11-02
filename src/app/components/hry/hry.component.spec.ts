import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HryComponent } from './hry.component';

describe('HryComponent', () => {
  let component: HryComponent;
  let fixture: ComponentFixture<HryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HryComponent]
    });
    fixture = TestBed.createComponent(HryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
