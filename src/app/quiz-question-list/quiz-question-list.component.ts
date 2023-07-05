import { Component, ElementRef, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Results } from '../models/quiz-questions';
import { QuizMakerService } from 'src/app/services/quiz-maker.service';

import { decode } from 'html-entities';

@Component({
  selector: 'app-quiz-question-list',
  templateUrl: './quiz-question-list.component.html',
  styleUrls: ['./quiz-question-list.component.scss']
})
export class QuizQuestionListComponent  {
  @Input() results: Results[] = [];
  showHideSubmitBtn: boolean = false;
  constructor(private route: Router, private quizMakerService: QuizMakerService) { }
  
  ngOnInit(): void { }

  //To get new questions list on every click on create buttton. 
  ngOnChanges(): void {
    this.showHideSubmitBtn = false;
    for (let option of this.results) {
      option.question = decode(option.question);
      option.selectedAnswer = '';
      let insertItemIndex = Math.floor(Math.random() * 4);
      option.incorrect_answers.splice(insertItemIndex, 0, option.correct_answer);
      for (const [index, value] of option.incorrect_answers.entries()) {
        option.incorrect_answers[index] = decode(value);
      }
    }
  }
  chooseAnswer(index: number, selectedAnswer: string, answerIndex: number): void {
    //set selected answer
    if (this.results[index].indexAnswer !== answerIndex) {
      this.results[index].indexAnswer = answerIndex;
      this.results[index].selectedAnswer = selectedAnswer;
    } else {
      this.results[index].indexAnswer = -1;
      this.results[index].selectedAnswer = '';
    }

    // show submit button basis on all answer selected.
    let result = this.results.filter(ele => ele.selectedAnswer && ele.selectedAnswer !== '');
    if (result.length === 5) {
      this.showHideSubmitBtn = true;
    } else {
      this.showHideSubmitBtn = false;
    }
  }

  //on submit navigates to result component.
  submitResult(): void {
    this.quizMakerService.saveSelectedQuizAnswer(this.results);
    this.route.navigate(['/', 'questionList']);
  }
}
