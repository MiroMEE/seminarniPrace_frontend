import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeorieComponent } from './teorie.component';

describe('TeorieComponent', () => {
  let component: TeorieComponent;
  let fixture: ComponentFixture<TeorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeorieComponent]
    });
    fixture = TestBed.createComponent(TeorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
