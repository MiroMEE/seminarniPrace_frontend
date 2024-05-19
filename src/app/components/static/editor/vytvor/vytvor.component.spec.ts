import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VytvorComponent } from './vytvor.component';

describe('VytvorComponent', () => {
  let component: VytvorComponent;
  let fixture: ComponentFixture<VytvorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VytvorComponent]
    });
    fixture = TestBed.createComponent(VytvorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
