import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category, TriviaCategory, DifficultyLevel } from 'src/app/models/category';
import { QuestionList, Results } from 'src/app/models/quiz-questions';
import { QuizMakerConstants } from 'src/app/quiz-maker.constants';
import { QuizMakerService } from 'src/app/services/quiz-maker.service';

@Component({
  selector: 'app-create-quiz-maker',
  templateUrl: './create-quiz-maker.component.html',
  styleUrls: ['./create-quiz-maker.component.scss']
})
export class CreateQuizMakerComponent implements OnInit {
  difficultyLevels: DifficultyLevel[] = QuizMakerConstants.DIFFICULTI_LEVEL;
  amount: number = QuizMakerConstants.AMOUNT;
  type: string = QuizMakerConstants.TYPE;
  subscription: Subscription = new Subscription();
  categoryList: TriviaCategory<Category[]>;
  createQuizForm: FormGroup = new FormGroup({
    category: new FormControl('Select category'),
    difficultyLevel: new FormControl('')
  });
  questionList: QuestionList;
  constructor(private quizMakerService: QuizMakerService) { }

  ngOnInit(): void {
    //getting category dropdown list.
    this.subscription = this.quizMakerService.getQuizMakerCategory().subscribe((res: TriviaCategory<Category[]>) => {
      this.categoryList = res;
    });

  }

  //getting quiz questions list.
  getQuizList(): void {
    let category: number = this.createQuizForm.get('category')?.value;
    let difficultyLevel: string = this.createQuizForm.get('difficultyLevel')?.value;

    if (category > 0  && difficultyLevel !== '') {
      this.subscription = this.quizMakerService.getQuizQuestionList(this.amount, category, difficultyLevel, this.type).subscribe((res: QuestionList) => {
        this.questionList = res;
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
