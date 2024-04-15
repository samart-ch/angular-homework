import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    getQuestionCategoryList(): Observable<any> {

      return this.client.get(
        environment.apiEndpoint + '/v1/questions/categories',
        httpOptions
      );
    }
  
}
