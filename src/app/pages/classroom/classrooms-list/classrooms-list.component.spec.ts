import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomsListComponent } from './classrooms-list.component';

describe('ClassroomsListComponent', () => {
  let component: ClassroomsListComponent;
  let fixture: ComponentFixture<ClassroomsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomsListComponent]
    });
    fixture = TestBed.createComponent(ClassroomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
