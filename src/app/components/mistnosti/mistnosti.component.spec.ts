import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MistnostiComponent } from './mistnosti.component';

describe('MistnostiComponent', () => {
  let component: MistnostiComponent;
  let fixture: ComponentFixture<MistnostiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MistnostiComponent]
    });
    fixture = TestBed.createComponent(MistnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
