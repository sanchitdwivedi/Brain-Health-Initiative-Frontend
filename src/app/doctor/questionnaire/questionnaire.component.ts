import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Question } from 'src/app/interfaces/Question';
import { QuestionnaireService } from 'src/app/_services/questionnaire.service';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  question: Question;
  options: [any];
  previous: any = [];


  constructor(private questionnaireService: QuestionnaireService) { }

  ngOnInit(): void {
    this.questionnaireService.getFirstQuestion().subscribe({
      next: (response: any) => {
        this.question = response;
        this.questionnaireService.getOptionsList(this.question.questionnaireOptions).subscribe({
          next: (response: any) => {
            this.options = response;
          },
          error: (error: any) => {
            console.log(error);
          }
        })
      },
      error: (error: any) => {
        console.log(error);
      }
    })    
  }

  next(questionnaireForm: NgForm){
    console.log(this.previous);
    let selectedOptions = [];
    for(let i=0; i<this.options.length; i++){
      if(questionnaireForm.value[this.options[i].uuid]!=="") selectedOptions.push(this.options[i].uuid);
    }
    this.questionnaireService.getNextQuestion(this.question.uuid, selectedOptions).subscribe({
      next: (response: any) => {
        this.previous.push(this.question);
        this.question = response;
        this.questionnaireService.getOptionsList(this.question.questionnaireOptions).subscribe({
          next: (response: any) => {
            this.options = response;
          },
          error: (error: any) => {
            console.log(error);
          }
        })
      }
    })
  }

  previousQuestion(){
    if(this.previous.length>0){
      this.question = this.previous.pop();
      this.questionnaireService.getOptionsList(this.question.questionnaireOptions).subscribe({
        next: (response: any) => {
          this.options = response;
        },
        error: (error: any) => {
          console.log(error);
        }
      })
    }
  }

}
