import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovickaOwnComponent } from './slovicka-own.component';

describe('SlovickaOwnComponent', () => {
  let component: SlovickaOwnComponent;
  let fixture: ComponentFixture<SlovickaOwnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlovickaOwnComponent]
    });
    fixture = TestBed.createComponent(SlovickaOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
