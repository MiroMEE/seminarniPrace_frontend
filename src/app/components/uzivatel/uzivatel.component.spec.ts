import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UzivatelComponent } from './uzivatel.component';

describe('UzivatelComponent', () => {
  let component: UzivatelComponent;
  let fixture: ComponentFixture<UzivatelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UzivatelComponent]
    });
    fixture = TestBed.createComponent(UzivatelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
