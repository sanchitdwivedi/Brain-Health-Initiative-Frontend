import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private httpClient: HttpClient) { }

  public getFirstQuestion(){
    return this.httpClient.get(`${baseUrl}/questionnaire/first`);
  }

  public getOption(id: number){
    return this.httpClient.get(`${baseUrl}/questionnaire/option/${id}`);
  }

  public getOptionsList(optionsIds: [number]){
    return this.httpClient.post(`${baseUrl}/questionnaire/options`, {"ids": optionsIds});
  }

  public getNextQuestion(questionId: number, options: any){
    return this.httpClient.post(`${baseUrl}/questionnaire`, {"questionId": questionId, "options": options});
  }

  public saveQuestionnaireResponse(patientId: string, responses: []){
    return this.httpClient.post(`${baseUrl}/questionnaire/save/${patientId}`, responses);
  }

  public getQuestionById(id: number){
    return this.httpClient.get(`${baseUrl}/questionnaire/question/${id}`);
  }

  public getQuestionsById(questionIds: any){
    return this.httpClient.post(`${baseUrl}/questionnaire/questions`, {"ids": questionIds});
  }
}
