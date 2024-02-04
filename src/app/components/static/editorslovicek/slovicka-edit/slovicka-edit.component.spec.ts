import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovickaEditComponent } from './slovicka-edit.component';

describe('SlovickaEditComponent', () => {
  let component: SlovickaEditComponent;
  let fixture: ComponentFixture<SlovickaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlovickaEditComponent]
    });
    fixture = TestBed.createComponent(SlovickaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
