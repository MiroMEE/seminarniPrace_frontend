import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VicehracuMistnostComponent } from './vicehracu-mistnost.component';

describe('VicehracuMistnostComponent', () => {
  let component: VicehracuMistnostComponent;
  let fixture: ComponentFixture<VicehracuMistnostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VicehracuMistnostComponent]
    });
    fixture = TestBed.createComponent(VicehracuMistnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
