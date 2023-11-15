import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkatulataComponent } from './skatulata.component';

describe('SkatulataComponent', () => {
  let component: SkatulataComponent;
  let fixture: ComponentFixture<SkatulataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkatulataComponent]
    });
    fixture = TestBed.createComponent(SkatulataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
