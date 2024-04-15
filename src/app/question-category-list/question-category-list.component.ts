import { Component } from '@angular/core';
import { QuestionList } from '@app/models/question-list';
import { BaseModel } from '@app/models/base-model';
import { QuestionService } from '@app/services/question.service';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-question-category-list',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatDividerModule, DatePipe],
  templateUrl: './question-category-list.component.html',
  styleUrl: './question-category-list.component.css'
})
export class QuestionCategoryListComponent {

  questionList: QuestionList[] = [];

  constructor(
    private router: Router,
    private questionService: QuestionService) {}

    ngOnInit() {
      
      this.questionService.getQuestionCategoryList().subscribe({
        next: (data: BaseModel<QuestionList[]>) => {
          this.questionList = data.data!;
          console.log('question-category-list : ' + JSON.stringify(this.questionList));
        },
        error: err => {
          console.error(err);
          console.log(err);
        }
      });
    }

    redirectTo(id: string) {
      this.router.navigateByUrl(`/questionnaire/${id}`);
    }
}
