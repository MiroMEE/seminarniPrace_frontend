import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiskatSlovickaComponent } from './ziskat-slovicka.component';

describe('ZiskatSlovickaComponent', () => {
  let component: ZiskatSlovickaComponent;
  let fixture: ComponentFixture<ZiskatSlovickaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZiskatSlovickaComponent]
    });
    fixture = TestBed.createComponent(ZiskatSlovickaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
