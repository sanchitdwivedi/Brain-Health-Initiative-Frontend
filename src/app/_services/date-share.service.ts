import { Injectable } from '@angular/core';
import { ConsultationCard } from '../interfaces/ConsultationCard';
import { Patient } from '../interfaces/Patient';

@Injectable({
  providedIn: 'root'
})
export class DateShareService {

  patient: Patient;
  report: ConsultationCard[] = [];
  questionnaireResponse: [] = [];

  constructor() { }

  sendReports(report: any){
    this.report = report;
  }

  getReports(){
    return this.report;
  }

  sendPatient(patient: any){
    this.patient = patient;
  }

  getPatient(){
    return this.patient;
  }

  saveQuestionnaireResponse(questionnaireResponse: []){
    this.questionnaireResponse = questionnaireResponse;
  }

  getQuestionnaireResponse(): []{
    return this.questionnaireResponse;
  }

  clearQuestionnaireResponse(){
    this.questionnaireResponse = [];
  }

}
