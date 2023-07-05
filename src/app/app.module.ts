import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateQuizMakerComponent } from './create-quiz-maker/create-quiz-maker.component';
import { QuizQuestionListComponent } from './quiz-question-list/quiz-question-list.component';
import { ResultComponent } from './result/result.component';
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuizMakerComponent,
    QuizQuestionListComponent,
    ResultComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }