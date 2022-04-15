import { Injectable } from '@angular/core';
import { ConsultationCard } from '../interfaces/ConsultationCard';

@Injectable({
  providedIn: 'root'
})
export class DateShareService {

  report: ConsultationCard[] = [];
  questionnaireResponse: [] = [];

  constructor() { }

  sendReports(report: any){
    this.report = report;
  }

  getReports(){
    return this.report;
  }

  saveQuestionnaireResponse(questionnaireResponse: []){
    this.questionnaireResponse = questionnaireResponse;
  }

  getQuestionnaireResponse(): []{
    return this.questionnaireResponse;
  }

}
