import { Injectable } from '@angular/core';
import { ConsultationCard } from '../interfaces/ConsultationCard';

@Injectable({
  providedIn: 'root'
})
export class DateShareService {

  report: ConsultationCard[] = [];
  constructor() { }

  sendReports(report: any){
    this.report = report;
  }

  getReports(){
    return this.report;
  }

}
