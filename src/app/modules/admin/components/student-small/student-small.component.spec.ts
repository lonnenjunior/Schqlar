import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSmallComponent } from './student-small.component';

describe('StudentSmallComponent', () => {
  let component: StudentSmallComponent;
  let fixture: ComponentFixture<StudentSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
