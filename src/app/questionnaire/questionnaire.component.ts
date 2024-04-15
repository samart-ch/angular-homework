import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseModel } from '@app/models/base-model';
import { Questionnaire } from '@app/models/questionnaire';
import { QuestionService } from '@app/services/question.service';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css'
})
export class QuestionnaireComponent {

  id: string = "";
  quesitonnaire = new Questionnaire();
  
  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService) 
    {}

    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id') ?? "";


      this.questionService.getQuestionByCategoryId(this.id).subscribe({
        next: (data: BaseModel<Questionnaire>) => {
          this.quesitonnaire = data.data!;

          console.log('question : ' + JSON.stringify(this.quesitonnaire));
        },
        error: err => {
          console.error(err);
          console.log(err);
        }
      });

    }



}
