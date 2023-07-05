import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizMakerComponent } from './create-quiz-maker/create-quiz-maker.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', redirectTo: 'createquiz', pathMatch: 'full' },
  { path: 'createquiz', component: CreateQuizMakerComponent },
  { path: 'questionList', component: ResultComponent },
  { path: '**', component: CreateQuizMakerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
