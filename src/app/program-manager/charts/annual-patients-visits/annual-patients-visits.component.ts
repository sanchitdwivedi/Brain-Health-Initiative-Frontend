import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ConsultationCard } from 'src/app/interfaces/ConsultationCard';
import { StatsService } from 'src/app/_services/stats.service';

@Component({
  selector: 'app-annual-patients-visits',
  templateUrl: './annual-patients-visits.component.html',
  styleUrls: ['./annual-patients-visits.component.css']
})
export class AnnualPatientsVisitsComponent implements OnInit {

  consultationForms: ConsultationCard[];

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Total patients' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(152, 255, 222, 0.8)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private statsService: StatsService) { }
  async ngOnInit() {
    this.consultationForms = await this.statsService.getConsultationFormData();
    this.fillChartData();
  }

  fillChartData(){
    let data = this.statsService.getPatientsByMonth();
    this.lineChartData[0].data = data;
  }
}
