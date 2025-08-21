import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCourierComponent } from './book-courier.component';

describe('BookCourierComponent', () => {
  let component: BookCourierComponent;
  let fixture: ComponentFixture<BookCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookCourierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
