import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcvicovaniComponent } from './procvicovani.component';

describe('ProcvicovaniComponent', () => {
  let component: ProcvicovaniComponent;
  let fixture: ComponentFixture<ProcvicovaniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcvicovaniComponent]
    });
    fixture = TestBed.createComponent(ProcvicovaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
