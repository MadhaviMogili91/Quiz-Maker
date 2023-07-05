import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizMakerComponent } from './create-quiz-maker.component';

describe('CreateQuizMakerComponent', () => {
  let component: CreateQuizMakerComponent;
  let fixture: ComponentFixture<CreateQuizMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuizMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
