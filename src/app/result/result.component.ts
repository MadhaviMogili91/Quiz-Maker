import { Component, OnInit } from '@angular/core';
import { QuizMakerService } from '../services/quiz-maker.service';
import { QuizMakerConstants } from '../quiz-maker.constants';
import { Router } from '@angular/router';
import { Results } from '../models/quiz-questions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  subscription: Subscription = new Subscription();
  showResults: Results[];
  answerCount: number = 0;
  tottalQuestion: number = QuizMakerConstants.AMOUNT;
  color: string = '';
  constructor(private quizMakerService: QuizMakerService, private route: Router) { }

  ngOnInit(): void {
    this.subscription = this.quizMakerService.quizResultSubscribe$.subscribe((data: Results[]) => {
      this.showResults = data;
    });

    for (let obj of this.showResults) {
      if (obj.correct_answer === obj.selectedAnswer) {
        this.answerCount++;
      }
    }
    //show color band basis on correct answer.
    if (this.answerCount >= QuizMakerConstants.MARK_RANGE[0] && this.answerCount <= QuizMakerConstants.MARK_RANGE[1]) {
      this.color = QuizMakerConstants.RED_COLOR;
    } else if (this.answerCount >= QuizMakerConstants.MARK_RANGE[2] && this.answerCount <= QuizMakerConstants.MARK_RANGE[3]) {
      this.color = QuizMakerConstants.YELLOW_COLOR
    } else if (this.answerCount >= QuizMakerConstants.MARK_RANGE[4] && this.answerCount <= QuizMakerConstants.MARK_RANGE[5]) {
      this.color = QuizMakerConstants.GREEN_COLOR;
    }
  }
  //navigate to create quiz.
  navigateToCreate(): void {
    this.route.navigate(['/', 'createquizMaker'])
  }

  //unsubscribe when component leave.
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}