import { Component } from '@angular/core';
import { QuestionList } from '@app/models/question-list';
import { BaseModel } from '@app/models/base-model';
import { QuestionService } from '@app/services/question.service';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';



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
    private questionService: QuestionService) {}

    ngOnInit() {
      
      this.questionService.getQuestionCategoryList().subscribe({
        next: (data: BaseModel<QuestionList[]>) => {
        
          this.questionList = data.data!;
          console.log(this.questionList);
  
        },
        error: err => {
          console.error(err);
          console.log(err);
        }
      });


    }

    redirectTo(url: string) {
      alert(url);

    }

    


}
