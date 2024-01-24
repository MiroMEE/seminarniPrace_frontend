import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorslovicekComponent } from './editorslovicek.component';

describe('EditorslovicekComponent', () => {
  let component: EditorslovicekComponent;
  let fixture: ComponentFixture<EditorslovicekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorslovicekComponent]
    });
    fixture = TestBed.createComponent(EditorslovicekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});