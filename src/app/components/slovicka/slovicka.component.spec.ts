import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovickaComponent } from './slovicka.component';

describe('SlovickaComponent', () => {
  let component: SlovickaComponent;
  let fixture: ComponentFixture<SlovickaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlovickaComponent]
    });
    fixture = TestBed.createComponent(SlovickaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
