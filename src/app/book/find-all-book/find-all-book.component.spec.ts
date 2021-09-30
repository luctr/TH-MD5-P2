import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllBookComponent } from './find-all-book.component';

describe('FindAllBookComponent', () => {
  let component: FindAllBookComponent;
  let fixture: ComponentFixture<FindAllBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
