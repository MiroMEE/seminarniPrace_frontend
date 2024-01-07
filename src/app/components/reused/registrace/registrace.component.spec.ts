import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraceComponent } from './registrace.component';

describe('RegistraceComponent', () => {
  let component: RegistraceComponent;
  let fixture: ComponentFixture<RegistraceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraceComponent]
    });
    fixture = TestBed.createComponent(RegistraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
