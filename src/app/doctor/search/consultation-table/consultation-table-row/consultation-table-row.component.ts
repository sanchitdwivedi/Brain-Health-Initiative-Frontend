import { Component, Input, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { DateShareService } from 'src/app/_services/date-share.service';
import { QuestionnaireService } from 'src/app/_services/questionnaire.service';
import { Question } from 'src/app/interfaces/Question';
import { Patient } from 'src/app/interfaces/Patient';

@Component({
  selector: 'app-consultation-table-row',
  templateUrl: './consultation-table-row.component.html',
  styleUrls: ['./consultation-table-row.component.css']
})
export class ConsultationTableRowComponent implements OnInit {
  dateAndTime: Date;
  formatedDateAndTime: string;
  uniqueId: string;
  followUp: string;
  referTo: string;
  questionnaireResponse: any[];
  currentQuestionIndex: number = -1;
  currentQuestion: Question;
  currentOptions: any[];
  questionnaireResponseId: string;
  modalId: string;

  @Input() reportDetail: any;
  constructor(private dataShareService: DateShareService,
              private questionnaireService: QuestionnaireService) {
  }

  ngOnInit() {
    this.formatDate(this.reportDetail.dateAndTime);
    this.getReferedDoctor(this.reportDetail.refer);
    this.uniqueId = "#" + this.reportDetail.formId;
    this.modalId = "questionnaire" + this.reportDetail.formId;
    this.questionnaireResponseId = "#questionnaire" + this.reportDetail.formId; 
    this.questionnaireResponse = this.reportDetail.questionnaireResponse;
    this.currentQuestionIndex = -1;
    if(this.questionnaireResponse.length>0) this.populateQuestionnaireResponse();
  }

  formatDate(date: Date): void {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    this.formatedDateAndTime = [year, month, day].join('-');

    if(this.reportDetail.followUp!==null && this.reportDetail.followUp.length>0){
      var da = new Date(this.reportDetail.followUp);
      this.followUp = [da.getFullYear(), '' + (da.getMonth()+1), '' + (da.getDate())].join('-');
    }
    else{
      this.followUp = '-';
    }
  }

  getReferedDoctor(refer: any){
    if(this.reportDetail.refer===null){
      this.referTo = '-';
    }
    else{
      this.referTo = 'Dr. ' + refer.firstName + ' ' + refer.lastName;
    }
  }

  populateQuestionnaireResponse() {
    this.currentQuestionIndex++;
    this.questionnaireService.getQuestionById(this.questionnaireResponse[this.currentQuestionIndex].uuid).subscribe({
      next: (response: any) => {
        this.currentQuestion = response;
        if(this.questionnaireResponse[this.currentQuestionIndex].options.length>0){
          this.questionnaireService.getOptionsList(this.questionnaireResponse[this.currentQuestionIndex].options).subscribe({
            next: (response: any) => {
              this.currentOptions = response;
            },
            error: (error: any) => {
              console.log(error);
            }
          })
        } else{
          // this.currentQuestionIndex++;
          this.currentOptions = [];
        }
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  initResponse(){
    this.currentQuestionIndex=-1;
    this.populateQuestionnaireResponse();
  }

  previousQuestionnaireResponse(){
    if(this.currentQuestionIndex===this.reportDetail.questionnaireResponse.length) this.currentQuestionIndex-=3
    else this.currentQuestionIndex-=2;
    this.populateQuestionnaireResponse();
  }

}

