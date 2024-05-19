import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeSlovickaComponent } from './moje-slovicka.component';

describe('MojeSlovickaComponent', () => {
  let component: MojeSlovickaComponent;
  let fixture: ComponentFixture<MojeSlovickaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MojeSlovickaComponent]
    });
    fixture = TestBed.createComponent(MojeSlovickaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
