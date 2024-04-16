import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseModel } from '@app/models/base-model';
import { QuestionList } from '@app/models/question-list';
import { Questionnaire } from '@app/models/questionnaire';
import { SubmitAssignment } from '@app/models/submit-assignment';
import { SummaryData } from '@app/models/summary-data';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private client: HttpClient) { }

    getQuestionCategoryList(): Observable<BaseModel<QuestionList[]>> {

      return this.client.get<BaseModel<QuestionList[]>>(
        environment.apiEndpoint + '/v1/questions/categories',
        httpOptions
      );
    }

    getQuestionByCategoryId(categoryId: string): Observable<BaseModel<Questionnaire>> {

      return this.client.get<BaseModel<Questionnaire>>(
        environment.apiEndpoint + `/v1/questions/categories/${categoryId}`,
        httpOptions
      );
    }

    submitAssignment(request: SubmitAssignment): Observable<BaseModel<SummaryData>> {
      
      return this.client.post<BaseModel<SummaryData>>(
        environment.apiEndpoint + `/v1/questions/submit-assignment`, request ,
        httpOptions
      );

    }
  
}
