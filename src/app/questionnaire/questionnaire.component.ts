import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountDownComponent } from '@app/count-down/count-down.component';
import { BaseModel } from '@app/models/base-model';
import { Questionnaire } from '@app/models/questionnaire';
import { QuestionService } from '@app/services/question.service';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css',
})
export class QuestionnaireComponent {


  id: string = "";
  quesitonnaire = new Questionnaire();

  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private formBuilder: FormBuilder) 
    {}

    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.paramMap.get('id') ?? "";

      
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



    handleUpdate($updatedData: number) {
      console.log('Event received from child:', $updatedData);

      if($updatedData == 0) {

        alert('TimeUp')
        this.router.navigateByUrl('/category')
      }

    }



}
