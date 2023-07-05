import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, TriviaCategory } from '../models/category';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuestionList, Results } from 'src/app/models/quiz-questions';
@Injectable({
  providedIn: 'root'
})
export class QuizMakerService {
  baseURL: string = 'https://opentdb.com/';
  private quizResult = new BehaviorSubject<Results[]>([] as Results[]);
  public quizResultSubscribe$ = this.quizResult.asObservable();
  constructor(private http: HttpClient) { }

  getQuizMakerCategory(): Observable<TriviaCategory<Category[]>> {
    const url: string = `${this.baseURL}api_category.php`;
    return this.http.get<TriviaCategory<Category[]>>(url);
  }

  getQuizQuestionList(amount: number, category: number, difficulty: string, type: string): Observable<QuestionList> {
    const url: string = `${this.baseURL}api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    return this.http.get<QuestionList>(url);
  }

  saveSelectedQuizAnswer(data: Results[]): void {
    this.quizResult.next(data);
  }
}
