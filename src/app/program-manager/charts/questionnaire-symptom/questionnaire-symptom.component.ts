import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { ConsultationCard } from 'src/app/interfaces/ConsultationCard';
import { QuestionnaireService } from 'src/app/_services/questionnaire.service';
import { StatsService } from 'src/app/_services/stats.service';

@Component({
  selector: 'app-questionnaire-symptom',
  templateUrl: './questionnaire-symptom.component.html',
  styleUrls: ['./questionnaire-symptom.component.css']
})
export class QuestionnaireSymptomComponent implements OnInit {

  consultationForms: ConsultationCard[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  pieChartColors: any[] = [{ backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"] }];

  constructor(private statsService: StatsService,
              private questionnaireService: QuestionnaireService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  async ngOnInit() {
    this.consultationForms = await this.statsService.getConsultationFormData();
    this.getSymptomsCount();
  }

  getSymptomsCount(){
    var map = new Map();  
    this.consultationForms.forEach(form => {
      if(form.questionnaireResponse.length>0){
        let conclusion: any = form.questionnaireResponse[form.questionnaireResponse.length-1];
        if(map.has(conclusion.uuid)){
          map.set(conclusion.uuid, map.get(conclusion.uuid)+1);
        }
        else{
          map.set(conclusion.uuid, 1);
        }
      }
    });

    let questionIds = [];
    let values = [];
    for(let key of map.keys()){
      questionIds.push(key);
    }
    for(let value of map.values()){
      values.push(value);
    }
    this.pieChartData = values;
    this.questionnaireService.getQuestionsById(questionIds).subscribe({
      next: (response: any) => {
        response.forEach((r: any) => {
          this.pieChartLabels.push(r.question);
        });
      },
      error: (error: any) => {
        console.log(error);
      }
    });

    
  }

}
