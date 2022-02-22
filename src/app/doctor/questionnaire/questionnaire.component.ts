import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  QuestionNumber = 1
  Question = "Question here!"
  Options = [{
    text: "Option1"
  },{
    text: "Option2"
  },{
    text: "Option3"
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
