import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovickaVytvorComponent } from './slovicka-vytvor.component';

describe('SlovickaVytvorComponent', () => {
  let component: SlovickaVytvorComponent;
  let fixture: ComponentFixture<SlovickaVytvorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlovickaVytvorComponent]
    });
    fixture = TestBed.createComponent(SlovickaVytvorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
