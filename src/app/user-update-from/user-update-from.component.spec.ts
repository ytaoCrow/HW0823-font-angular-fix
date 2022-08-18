import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateFromComponent } from './user-update-from.component';

describe('UserUpdateFromComponent', () => {
  let component: UserUpdateFromComponent;
  let fixture: ComponentFixture<UserUpdateFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdateFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
