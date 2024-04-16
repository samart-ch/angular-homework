import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountDownComponent } from '@app/count-down/count-down.component';
import { BaseModel } from '@app/models/base-model';
import { Questionnaire } from '@app/models/questionnaire';
import { QuestionService } from '@app/services/question.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {
  Answer,
  Question,
  SelectionAnswer,
  SubmitAssignment,
} from '@app/models/submit-assignment';
import { SummaryData } from '@app/models/summary-data';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [
    CountDownComponent,
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css',
})
export class QuestionnaireComponent {
  id: string = '';

  questionnaire = new Questionnaire();
  questionInfoKey: string[] = [];
  selectionAnswer: SelectionAnswer[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    
    this.id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    this.questionService.getQuestionByCategoryId(this.id).subscribe({
      next: (data: BaseModel<Questionnaire>) => {
        this.questionnaire = data.data!;
        console.log('question : ' + JSON.stringify(this.questionnaire));
      },
      error: (err) => {
        console.error(err);
        console.log(err);
      },
    });
  }

  addAnswer($event: boolean, questionId: string, questionAnswerId: string) {
    const data: SelectionAnswer = {
      questionId: questionId,
      questionAnswerId: questionAnswerId,
    };

    if ($event) {
      this.selectionAnswer = [...this.selectionAnswer, data];
    } else {
      const answer = this.selectionAnswer.filter(
        (x) => x.questionAnswerId != data.questionAnswerId
      );
      this.selectionAnswer = answer;

      //const index = this.submitAssignment.lastIndexOf(data)
      //  this.submitAssignment = [...this.submitAssignment.slice(0,index) , ...this.submitAssignment.slice(index+1)]
    }
  }

  onSubmit() {

    let questionData: Question[] = []
    this.questionInfoKey = []
    let requestData: SubmitAssignment = {
      questionCategoryId: this.questionnaire.questionCategoryId
    };

    for(const key of this.questionnaire.questionInfo) {
      this.questionInfoKey = [...this.questionInfoKey,key.questionId]
    }

    for(const questionId of this.questionInfoKey) {

       let selectionAnswers = this.selectionAnswer.filter( x=> x.questionId == questionId)
    
       let question: Question ;
       question = {
          questionId: questionId
       };

       let answerData: Answer[] = []
      
       for(const key of selectionAnswers) {
          let answer: Answer ;
          answer = {
            questionAnswerId: key.questionAnswerId
          }

          answerData = [...answerData,answer]
       }

       question.answers = answerData
       questionData = [...questionData,question]
    }

    requestData.questions = questionData

    this.questionService.submitAssignment(requestData).subscribe({
      next: (data: BaseModel<SummaryData>) => {
        
        console.log('submitAssignment : ' + JSON.stringify(data));
        this.router.navigate(['/summary'], {
          queryParams: {
            fullScore: data.data?.fullScore,
            score: data.data?.score
          } 
        });
      },
      error: (err) => {
        console.error(err);
        console.log(err);
      },
    });
  }

  handleUpdate($updatedData: number) {
    //console.log('Event received from child:', $updatedData);

    if ($updatedData == 0) {
      alert('TimeUp');
      this.onSubmit();
    }
  }
}
